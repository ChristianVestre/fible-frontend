import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons'
import { connect } from "react-redux";
import { removeRoute, updateRoutemgmtState } from '../../lib/redux/actions/uiActions';
import Router from 'next/router'
import Cookie from 'js-cookie';
import { useLazyQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';


const SelectorItem = props => {
    const [getHtypeWithComponents, { loading, data }] = useLazyQuery( gql`query getHtypeWithComponents 
    {   getHtypeWithComponents{
            htype{
                route{id name ownerid components}
                stop{id name ownerid components}
                poi{id name ownerid components}
            } 
            components{id content type}}
    }`);

    const handleEditRoutes = async (e) => {

        e.stopPropagation()
        e.nativeEvent.stopImmediatePropagation();
        Cookie.set("hid", props.itemData.id)
        sessionStorage.setItem("hid",props.itemData.id)
        // Cookie.
      //  const resp = await getHtypeWithComponents()

        const selectedId = props.itemData.id
        const htype = props.type
        //props.updateSelectorManagerState({selectedId,htype})
        Router.push({
            pathname: '/inputscreen',
            query: { id:props.itemData.id },
        },
            //'inputscreen'
        )
      //  Router.replace('/routemanagement','/inputscreen')
    };

    const handleSelectorManagerStateUpdate = (e) => {
        const selectedId = props.itemData.id
        const htype = props.type
        props.updateRoutemgmtState({ selectedId, htype })

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
                    color={props.itemData.id == props.uiState.routeMgmt.selector["selected"+ props.type] ? "salmon" : "lightgray"}
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

const mapStateToProps = state => {
    return { uiState: state.ui, updateRoutemgmtState: state.updateSelectorManagerState };
};

//export default SelectorItem

export default connect(mapStateToProps, { removeRoute, updateRoutemgmtState })(SelectorItem);

const Container = styled.div`
    border: 1px solid;
    border-color: ${props => props.color};
    border-radius:2em;
    height:8vh;
    padding: 8px;
    margin-bottom:1em;
    background-color:white;
    :hover {
        border-color:rgba(250,128,114 ,0.3 );
    }

`


const Headline = styled.h3`
    font-size: 2vh;
    font-weight:lighter;
    position:relative;
    user-select:none;
    top:10%;
    left:20%;
    margin:0;
    color:black;
    border:none;
    background:none;
    text-decoration: none;   
`

const EditButton = styled.button`
    position:relative;
    bottom:2vh;
    left:95%;
    margin-right:3vw;
    font-size:2vh;
    border:0;
    color:none;
    background-color:transparent;
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