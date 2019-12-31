import React from 'react';
import styled from 'styled-components';
import FibleRoute from './selectorItem';
import { Droppable } from 'react-beautiful-dnd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Router from 'next/router'
import { uiInitializeInputScreenUi, uiSetTitle, uiLoadStopAndPoiManagerState } from '../../../lib/redux/actions/uiActions';
import { dataLoadInputScreen } from '../../../lib/redux/actions/dataActions';
import { connect, useSelector, useDispatch } from 'react-redux';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { createRoute } from '../../../lib/createFunctions';
import { DataState } from '../../../types/reduxTypes';



const Selector = props => {
    const [setRoute, { data }] = useMutation(gql`
    mutation setRoute($route:String!){
        setRoute(route:$route){
            id
        }
    }`);
    const dataState = useSelector((state:DataState) => state.data)
    const dispatch = useDispatch()

    const handleInputScreenButton = async (props) => {
        console.log(props.type)
        if (props.type == "routes") {
            const route = createRoute({ user: dataState.user, type: "routes" })
            dispatch(uiInitializeInputScreenUi({ dispatch: props.type }))
            dispatch(dataLoadInputScreen({ htype: props.type, user: dataState.user, htypeData: { routes:route}, componentsArray: route.components }))
            await setRoute({ variables: { route: JSON.stringify(route) } })
            sessionStorage.setItem("hid", route.id)
            Router.push({
                pathname: '/inputscreen',
            })
        } else {
            let firstLetter = props.type.substring(0, 1)
            let rest = props.type.substring(1)
            let title = firstLetter + rest.toLowerCase() + " manager"
            dispatch(uiLoadStopAndPoiManagerState({ htype: props.type }))
            dispatch(uiSetTitle({ title: title }))
        }
    }

    return (
        <Container>
            <Title>{props.type.substring(0, 1).toUpperCase() + props.type.substring(1)}</Title>
            <Droppable droppableId={props.type}>
                {provided => (
                    <RouteList
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {console.log(props.listItems)}
                        {props.listItems.map((itemData, index) => <FibleRoute key={itemData.id} type={props.type} itemData={itemData} index={index} />)}
                        {provided.placeholder}
                    </RouteList>
                )}
            </Droppable>
            <InputScreenButton onClick={() => handleInputScreenButton(props)} >
                <FontAwesomeIcon icon={faPlus} />
            </InputScreenButton>
        </Container>
    )
}

export default Selector


const Container = styled.div`
    margin-left:0.5vw;
    margin-right:0.5vw;
    border: 1px solid lightgray;
    border-radius:2em;
    min-width:20vw;
    width:100%;
    height:100%;
    position: relative;

`
const Title = styled.h1`
    padding:8px;
`
const RouteList = styled.div`

    padding:8px;
`



const InputScreenButton = styled.button`
    position:absolute;
    bottom:0;
    right:0;
    font-size:6vh;
    border:0;
    color:none;
    background-color:transparent;

    :focus {
        outline:none;
    }
    `