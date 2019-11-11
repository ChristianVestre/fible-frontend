import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { connect } from "react-redux";
import {removeRoute, updateSelectorManagerState } from '../../redux/actions/uiActions';





class FibleRoute extends React.Component<{itemData:any,type:any, index:any, removeRoute:any, columnId:string,updateSelectorManagerState:Function,selectorState:any}> {

      
    
      handleRemoveRoutes = (e) => {
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

      handleSelectorManagerStateUpdate = () => {
        var itemId = this.props.itemData.id
        var dispatch = ""
        switch (this.props.type){
            case("ROUTES"):{ 
                if(itemId == this.props.selectorState["ROUTES"].id){
                dispatch = "ROUTE_DESELECT"
               /// borderColor = "lightgray"
                }else{
                dispatch = "ROUTE_SELECT"
              //  borderColor = "salmon"
                }
                break
            }
            case("STOPS"):{
            if(this.props.itemData.id == this.props.selectorState["STOPS"].id){
                dispatch = "STOP_DESELECT"
         //       borderColor = "lightgray"
                }else{
                dispatch = "STOP_SELECT"
           //     borderColor = "salmon"  
                }
                break
            }
            default:{
                dispatch = "ROUTE_SELECT"
            }
            
        }
        this.props.updateSelectorManagerState({itemId,dispatch})
        
      }

      
    
    render(){

        return(
        <Draggable draggableId={this.props.itemData.id} index={this.props.index}>
            {provided =>( 
            <Container
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                onClick={this.handleSelectorManagerStateUpdate}
                color={this.props.itemData.id == this.props.selectorState[this.props.type].id ? "salmon":"lightgray" }
                >
                <Headline>{this.props.itemData.headline}</Headline>
                <RemoveButton onClick={this.handleRemoveRoutes} >
                    <FontAwesomeIcon icon={faTimes}/>
                </RemoveButton>
            </Container>
            )
            }
        </Draggable>
        )
    }
}

const mapStateToProps = state => {
    return {selectorState:state.selector ,updateSelectorManagerState:state.updateSelectorManagerState};
  };



export default connect(mapStateToProps,{ removeRoute, updateSelectorManagerState })(FibleRoute);

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
