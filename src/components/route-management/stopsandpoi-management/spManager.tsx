import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlus} from '@fortawesome/free-solid-svg-icons'
import { uiInitializeInputScreenUi, uiLoadStopAndPoiManagerState } from '../../../lib/redux/actions/uiActions';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import SandpSelector from './spSelector';
import { DataState, UiState } from '../../../types/reduxTypes';
import { dataLoadInputScreen, dataUpdateChildHtypeOrder, dataUpdateHtypeOrder } from '../../../lib/redux/actions/dataActions';
import { createStop, createPoi } from '../../../lib/createFunctions';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Router from 'next/router';
import dynamic from 'next/dynamic';



const StopsAndPois = props => {
    const [setStop] = useMutation(gql`
    mutation setStop($stop:String!){
        setStop(stop:$stop){
            id
        }
    }`);
    const [setPoi] = useMutation(gql`
    mutation setPoi($poi:String!){
        setPoi(poi:$poi){
            id
        }
    }`);
    const [updateHtype] = useMutation(gql`
    mutation updateHtype($htype:String!){
        updateHtype(htype:$htype)
    }`);
    const [updateUser] = useMutation(gql`
    mutation updateUser($user:String!){
        updateUser(user:$user)
    }`);

    const dataState = useSelector((state: DataState) => state.data);
    const uiState = useSelector((state: UiState) => state.ui);
    const dispatch = useDispatch()


    const htypeParent = props.type == "stops" ? "routes" : "stops"
    //const allList = dataState.user[props.type].map((element) => dataState[props.type][element])
    const allList = dataState.user[props.type].reduce((result, item) => {
        if (dataState[props.type][item] != undefined
            && dataState[htypeParent][uiState.routeMgmt.selector['selected' + htypeParent]][props.type] != undefined
            && !dataState[htypeParent][uiState.routeMgmt.selector['selected' + htypeParent]][props.type].includes(item)) { result.push(dataState[props.type][item]) }
        return result
    }, [])
    //filters the list to the stops/pois that belongs to the route/stop
    const filteredList = dataState[htypeParent][uiState.routeMgmt.selector['selected' + htypeParent]][props.type].reduce((result, item) => {
        if (dataState[props.type][item] != undefined
            && dataState[htypeParent][uiState.routeMgmt.selector['selected' + htypeParent]][props.type] != undefined
            && dataState[htypeParent][uiState.routeMgmt.selector['selected' + htypeParent]][props.type].includes(item)) {
            result.push(dataState[props.type][item])
        }
        return result
    }, [])
    let htype
    const handleInputScreenButton = async () => {
        if (props.type == "stops") {
            htype = createStop({ user: dataState.user, type: "stops" })
            await setStop({ variables: { stop: JSON.stringify(htype) } })
            sessionStorage.setItem("hid", htype.id)
        } else {
            htype = createPoi({ user: dataState.user, type: "pois" })
            await setPoi({ variables: { poi: JSON.stringify(htype) } })
            sessionStorage.setItem("hid", htype.id)
        }
        dispatch(uiInitializeInputScreenUi({ dispatch: props.type }))
        dispatch(dataLoadInputScreen({ htype: props.type, user: dataState.user, htypeData: { [props.type]: htype}, componentsArray: htype.components }))
        Router.push({
            pathname: '/inputscreen',
        })
    }

    const handleBackButton = async () => {
        dispatch(uiLoadStopAndPoiManagerState({ htype: props.type }))
    }

    const onDragEnd = (result) => {
        console.log(result)
        const htype = props.type + "s"
        const { destination, source, draggableId } = result;
        if (!destination) {
            return;
        }
        if (destination.droppableId == source.droppableId &&
            destination.index == source.index) {
            return;
        }
        if (destination.droppableId == source.droppableId) {
            if (destination.droppableId === "ALL") {
                const newOrder = Array.from(dataState.user[props.type]);
                newOrder.splice(source.index, 1);
                newOrder.splice(destination.index, 0, draggableId);
                dispatch(dataUpdateHtypeOrder({
                    newOrder: newOrder,
                    htype: props.type
                }))
                updateUser({variables:{user:JSON.stringify({...dataState.user, [htype]:newOrder})}})
            } else if (destination.droppableId == "SELECTED") {
                const newOrder = Array.from(
                    dataState[htypeParent]
                    [uiState.routeMgmt.selector['selected' + htypeParent]]
                    [htype]);
                newOrder.splice(source.index, 1);
                newOrder.splice(destination.index, 0, draggableId);
                dispatch(dataUpdateChildHtypeOrder({
                    newOrder: newOrder,
                    htype: htype,
                    parentHtype: htypeParent,
                    parentHtypeId: uiState.routeMgmt.selector['selected' + htypeParent]
                }))
                updateHtype({variables:{htype:JSON.stringify({...dataState[htypeParent][uiState.routeMgmt.selector['selected' + htypeParent]],[htype]:newOrder})}})
            }
        } else {
            const userOrder = Array.from(dataState.user[htype]);
            const htypeOrder = Array.from(
                dataState[htypeParent]
                [uiState.routeMgmt.selector['selected' + htypeParent]]
                [htype]);
            if (source.droppableId == "ALL") {
                userOrder.splice(source.index, 1);
            } else {
                htypeOrder.splice(source.index, 1);
            }
            if (destination.droppableId == "ALL") {
                userOrder.splice(destination.index, 0, draggableId);
            } else {
                htypeOrder.splice(destination.index, 0, draggableId);
            }
        /*    dispatch(dataUpdateHtypeOrder({
                newOrder: userOrder,
                htype: props.type
            }))*/
            dispatch(dataUpdateChildHtypeOrder({
                newOrder: htypeOrder,
                htype: props.type,
                parentHtype: htypeParent,
                parentHtypeId: uiState.routeMgmt.selector['selected' + htypeParent]
            }))
            updateHtype({variables:{htype:JSON.stringify({...dataState[htypeParent][uiState.routeMgmt.selector['selected' + htypeParent]],[htype]:htypeOrder})}})
        }
    }

    return (
        <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
            <BackButton onClick={handleBackButton} >
                <FontAwesomeIcon icon={faTimes} />
            </BackButton>
            <InputScreenButton onClick={handleInputScreenButton} >
                <FontAwesomeIcon icon={faPlus} />
            </InputScreenButton>
            <SandpSelector type="ALL" list={allList}></SandpSelector>
            <SandpSelector type="SELECTED" list={filteredList}></SandpSelector>
        </DragDropContext>


    )
}


export default dynamic(() => Promise.resolve(StopsAndPois), {
    ssr: false
})

const InputScreenButton = styled.button`
    position:absolute;
    bottom:2%;
    right:50%;
    transform: translate(50%,0);
    font-size:10vh;
    border:0;
    color:none;
    background-color:transparent;

    :focus {
        outline:none;
    }
`

const BackButton = styled.button`
position:absolute;
top:2%;
right:5%;
transform: translate(50%,0);
font-size:5vh;
border:0;
color:none;
background-color:transparent;

:focus {
    outline:none;
}
`