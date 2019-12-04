import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons'
import { connect } from "react-redux";
import {removeRoute, updateSelectorManagerState } from '../../redux/actions/uiActions';
import Router from 'next/router'
import Cookie from 'js-cookie';


const SelectorItem = props =>{
        console.log(props)

      const handleEditRoutes = (e) => {

        e.stopPropagation()
        e.nativeEvent.stopImmediatePropagation();
        Cookie.set("hid", props.itemData.id)
       // Cookie.
        const selectedId = props.itemData.id
        const htype = props.type
        props.updateSelectorManagerState({selectedId,htype})
            Router.push({
                pathname: '/inputscreen',
            })
      };

      const handleSelectorManagerStateUpdate = (e) => {
        

        const selectedId = props.itemData.id
        const htype = props.type
        props.updateSelectorManagerState({selectedId,htype})
        
          
        
      }
        return(
        <Draggable draggableId={props.itemData.id} index={props.index}>
            {provided =>( 
            <Container
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                onClick={(e) => handleSelectorManagerStateUpdate(e)}
                color={props.itemData.id == props.uiState.selector["selected" + props.type] ? "salmon":"lightgray" }
                >
                <Headline>{props.itemData.name}</Headline>
                <RemoveButton onClick={(e) => handleEditRoutes(e)} >
                    <FontAwesomeIcon icon={faEdit}/>
                </RemoveButton>
            </Container>
            )
            }
        </Draggable>
        )
}

const mapStateToProps = state => {
    return {uiState:state.ui,updateSelectorManagerState:state.updateSelectorManagerState};
  };

//export default SelectorItem

export default connect(mapStateToProps,{ removeRoute, updateSelectorManagerState })(SelectorItem);

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

const RemoveButton = styled.button`
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