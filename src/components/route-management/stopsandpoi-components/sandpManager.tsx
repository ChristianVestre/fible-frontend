import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons'
import {initializeInputScreenUi,stopAndPoiManagerController} from '../../../redux/actions/uiActions';
import {initializeHtype} from '../../../redux/actions/dataActions';
import {connect} from 'react-redux';
import {DragDropContext} from 'react-beautiful-dnd';
import SandpSelector from './sandpSelector';



let allList = []


const StopsAndPois = props => {
    const handleInputScreenButton= () =>{
        console.log("hello")
        this.props.stopAndPoiManagerController()
    }

    const onDragEnd= (result) => {
        //todo
    }

    
       return( 
        <DragDropContext onDragEnd={(result) => onDragEnd(result)}>  


        <InputScreenButton onClick={handleInputScreenButton} >
            <FontAwesomeIcon icon={faPlus}/>
        </InputScreenButton>
        {allList = props.dataState.user[props.uiState.selector.htype].map((element) => props.dataState[props.uiState.selector.htype][element.id])}
        <SandpSelector type="ALL" list={allList}></SandpSelector>
        <SandpSelector type="SELECTED" list = {allList}></SandpSelector>
        </DragDropContext>

        
       )
}

const mapStateToProps = state => {
    return {dataState:state.data ,uiState:state.ui,initializeInputScreenState:state.initializeInputScreenState, stopAndPoiManagerController:state.stopAndPoiManagerController};
  };



export default connect(mapStateToProps,{initializeInputScreenUi, initializeHtype, stopAndPoiManagerController  })(StopsAndPois);

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