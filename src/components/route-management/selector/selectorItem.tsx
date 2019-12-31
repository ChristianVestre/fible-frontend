import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux';
import { uiUpdateRoutemgmtState, uiInitializeSimulatorState } from '../../../lib/redux/actions/uiActions';
import Router from 'next/router'
import { UiState } from '../../../types/reduxTypes';
import { dataSetSelectedHtype } from '../../../lib/redux/actions/dataActions';


const SelectorItem = props => {
    const uiState = useSelector((state: UiState) => state.ui);
    const dispatch = useDispatch()
   /* const [getCompontents, { loading, data }] = useLazyQuery( gql`
    query getComponents($ids:String)
    {   getComponents(ids:$ids){
        id content type
        }    }
    `);*/

    const handleEditRoutes = async (e) => {

        e.stopPropagation()
        e.nativeEvent.stopImmediatePropagation();
        sessionStorage.setItem("hid",props.itemData.id)
        const selectedId = props.itemData.id
        const htype = props.type
        dispatch(uiInitializeSimulatorState({show:htype}))
        dispatch(dataSetSelectedHtype({selectedHtype:htype,selectedHtypeId:props.itemData.id}))
        //const resp = await getCompontents()
        //props.updateSelectorManagerState({selectedId,htype})
        Router.push({
            pathname: '/inputscreen',
        },
            //'inputscreen'
        )
      //  Router.replace('/routemanagement','/inputscreen')
    };

    const handleSelectorManagerStateUpdate = (e) => {
        const selectedId = props.itemData.id
        const htype = props.type
        dispatch(uiUpdateRoutemgmtState({ selectedId, htype }))

    }
    return (
        <Draggable draggableId={props.itemData.id} index={props.index}>
            {provided => (
                <Container
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    onClick={(e) => handleSelectorManagerStateUpdate(e)}
                    //todo fix state
                    color={props.itemData.id == uiState.routeMgmt.selector["selected"+ props.type] ? "salmon" : "lightgray"}
                >
                    <Headline>{props.itemData.name}</Headline>
                    <EditButton onClick={(e) => handleEditRoutes(e)} >
                        <FontAwesomeIcon icon={faEdit} />
                    </EditButton>
                </Container>
            )
            }
        </Draggable>
    )
}

export default SelectorItem;

const Container = styled.div`
    position:relative;
    border: 1px solid;
    border-color: ${props => props.color};
    border-radius:2em;
    padding-top:4vh;
    padding: 1vw;
    margin-bottom:2vh;
    background-color:white;
    :hover {
        border-color:rgba(250,128,114 ,0.3 );
    }

`


const Headline = styled.h3`
    font-size: 2vh;
    font-weight:lighter;
    user-select:none;
    top:10%;
    left:5vw;
    position:relative;
    margin:0;
    color:black;
    border:none;
    background:none;
    text-decoration: none;   
`

const EditButton = styled.button`
    position:relative;
    bottom:3vh;
    left:98%;
    font-size:2vh;
    border:0;
    color:none;
    background-color:transparent;
    transform: translate(-50%, 0); 

    cursor: pointer;
    :focus {
        outline:none;
    }

    
`
/*
handleremovedroutes
        //prevent select state update aswell
        e.stopPropagation()
        var itemId = props.itemData.id
        //for removing columns when deleting list items
        var dispatch = props.type == "STOPS" ? "STOP_DESELECT" : dispatch = "ROUTE_DESELECT"
        var removeIndex = props.index;
        var removeColumn = props.columnId;
        props.removeRoute({removeIndex,removeColumn});
        props.updateSelectorManagerState({itemId,dispatch})

        */