import React from 'react';
import styled from 'styled-components';
import FibleRoute from './selectorItem';
import { Droppable } from 'react-beautiful-dnd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons'
import Router from 'next/router'
import { initializeInputScreenUi, loadStopAndPoiManagerState, setTitle } from '../../lib/redux/actions/uiActions';
import { initializeHtype, initializeInputScreenData } from '../../lib/redux/actions/dataActions';
import { connect } from 'react-redux';
import Cookie from 'js-cookie';
import { ApolloClient } from 'apollo-client'
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';




const Container = styled.div`
    margin:1em;
    border: 1px solid lightgray;
    border-radius:2em;
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


const Selector = props => {
    const [addRoute, { data }] = useMutation(gql`
    mutation setRoute{setRoute{
        id
    }
    }
    `
    );


    const handleInputScreenButton = async (props) => {
        console.log(props.type)
        if (props.type == "routes") {
            props.initializeInputScreenData({htype:props.type,user:props.dataState.routeMgmt.user})
            props.initializeInputScreenUi({ dispatch: props.type })
            const route = await addRoute()
            console.log(data)
            console.log(route.data.setRoute.id)
            Cookie.set("hid", route.data.setRoute.id)
            Router.push({
                pathname: '/inputscreen',
            })
        } else {
            props.loadStopAndPoiManagerState({ htype: props.type })
            let firstLetter = props.type.substring(0, 1)
            let rest = props.type.substring(1)
            let title = firstLetter + rest.toLowerCase() + " manager"
            props.setTitle({ title: title })

        }
    }

    return (
        <Container>
            <Title>{props.type.substring(0,1).toUpperCase() + props.type.substring(1,)}</Title>
            <Droppable droppableId={props.type}>
                {provided => (
                    <RouteList
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
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

const mapStateToProps = state => {
  // console.log(state)
    return { dataState: state.data, uiState:state.ui, loadStopAndPoiManagerState:state.loadStopAndPoiManagerState};
};

//export default Selector

export default connect(mapStateToProps, { initializeInputScreenUi, initializeInputScreenData, loadStopAndPoiManagerState, setTitle })(Selector);



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