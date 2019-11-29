import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons'
import { connect } from "react-redux";
import {removeRoute, updateSelectorManagerState } from '../../redux/actions/uiActions';





const SelectorItem = props =>{
      
    
      const handleRemoveRoutes = (e) => {
        //prevent select state update aswell
        e.stopPropagation()
        var itemId = this.props.itemData.id
        //for removing columns when deleting list items
        var dispatch = this.props.type == "STOPS" ? "STOP_DESELECT" : dispatch = "ROUTE_DESELECT"
        var removeIndex = this.props.index;
        var removeColumn = this.props.columnId;
        this.props.removeRoute({removeIndex,removeColumn});
        this.props.updateSelectorManagerState({itemId,dispatch})
      };

      const handleSelectorManagerStateUpdate = () => {
        const selectedId = this.props.itemData.id
        const htype = this.props.type
        this.props.updateSelectorManagerState({selectedId,htype})
        
      }

      


        return(
        <Draggable draggableId={props.itemData.id} index={props.index}>
            {provided =>( 
            <Container
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                onClick={() => handleSelectorManagerStateUpdate()}
                color={props.itemData.id == props.uiState.selector["selected" + props.type] ? "salmon":"lightgray" }
                >
                <Headline>{props.itemData.name}</Headline>
                <RemoveButton onClick={(e) => handleRemoveRoutes(e)} >
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

    :focus {
        outline:none;
    }

    
`
