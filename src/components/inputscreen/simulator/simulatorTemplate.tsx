import styled from 'styled-components';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd'
import { uiUpdateSimulatorSelectionState, uiUpdateInputScreenState } from '../../../lib/redux/actions/uiActions';
import { dataUpdateComponent, dataEmptySelectedComponent, dataSetSelectedComponent, dataDeleteSelectedComponent } from '../../../lib/redux/actions/dataActions'
import TextareaAutosize from 'react-autosize-textarea';
import { useMutation } from '@apollo/react-hooks';
import { DataState, UiState } from '../../../types/reduxTypes';
import gql from 'graphql-tag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const SimulatorTemplate = props => {
    const [updateComponent, { data }] = useMutation(gql`
    mutation updateComponent($component:String! $parentHtype:String){
        updateComponent(component:$component parentHtype:$parentHtype)
    }`);
    const [deleteComponent] = useMutation(gql`
    mutation deleteComponent($component:String! $parentHtype:String){
        deleteComponent(component:$component parentHtype:$parentHtype)
    }`);
    const dataState = useSelector((state: DataState) => state.data)
    const uiState = useSelector((state: UiState) => state.ui)
    const dispatch = useDispatch()

    const handleSelection = () => {
        let selectedComponentId = props.component.id
        if (props.component.id != uiState.inputScreen.simulator.selectedComponentId) {
            updateComponent({
                variables: {
                    component:
                        JSON.stringify(dataState.components[selectedComponentId]),
                    parentHtype: JSON.stringify(dataState[dataState.selectedHtype][dataState.selectedHtypeId])
                }
            })
            dispatch(uiUpdateSimulatorSelectionState({ selectedComponentId }))
            dispatch(dataSetSelectedComponent({ selectedComponentId }))
            dispatch(uiUpdateInputScreenState("HEADLINE_INPUT"))
        } else {
            selectedComponentId = "empty"
            dispatch(uiUpdateSimulatorSelectionState({ selectedComponentId }))
            dispatch(dataSetSelectedComponent({ selectedComponentId }))
            dispatch(uiUpdateInputScreenState("MENU"))
        }
    }

    const handleDeleteRoutes = async (e) => {
        deleteComponent({
            variables: {
                parentHtype:
                    JSON.stringify(dataState[dataState.selectedHtype][dataState.selectedHtypeId]),
                component: JSON.stringify(dataState.components[dataState.selectedComponentId])
            }
        })
        await dispatch(dataDeleteSelectedComponent())
        dispatch(uiUpdateInputScreenState("MENU"))
    }

    return (
        <Draggable draggableId={props.component.id} index={props.index}>
            {provided => (
                <Container
                    key={props.component.id}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}>
                    <SimulatorContainer
                        onClick={handleSelection}
                        datatype={props.component.id == uiState.inputScreen.simulator.selectedComponentId ? "-0.2vh" : "0"}
                        property={props.component.id == uiState.inputScreen.simulator.selectedComponentId ? "dashed" : "none"}
                    >
                        {props.underComponent}
                    </SimulatorContainer>
                    <DeleteButton onClick={handleDeleteRoutes}
                        property={props.component.id == uiState.inputScreen.simulator.selectedComponentId ? "flex" : "none"}>
                        <FontAwesomeIcon icon={faTimesCircle} />
                    </DeleteButton>
                </Container>
            )
            }
        </Draggable>
    )
}

export default SimulatorTemplate;

const Container = styled.div`
        width:120%;
        outline: 0px solid transparent;
        word-wrap: break-word;
        padding:1%;
        border: ${props => props.property} 0.2vh;
        margin: ${props => props.datatype};
        border-radius:2.5vh;
        display:flex;
        justify-content:space-between;
        flex-direction:row;
    `

const DeleteButton = styled.button`
    
        font-size:4vh;
        border:0;
        color:none;
        background-color:transparent;
        transform: translate(-50%, 0); 
    
        cursor: pointer;
        :focus {
            outline:none;
        }
        display:${props => props.property} !important;
    
        
    `

const SimulatorContainer = styled.div`
        height:auto;
        width:80%;
        outline: 0px solid transparent;
        word-wrap: break-word;
        padding:1%;
        border: ${props => props.property} 0.2vh;
        margin: ${props => props.datatype};
        border-radius:2.5vh;
        display:flex;
        align-content:flex-start;
    `

const HeadlineText = styled.h1`
        font-weight: lighter;
        position:relative;
        user-select: none;
        left:2%;
        height: 94%;
        width: 96%;
        font-size:3vh;
        margin:0.1vh;
        padding:0.5vh;
        text-align:center;
    `