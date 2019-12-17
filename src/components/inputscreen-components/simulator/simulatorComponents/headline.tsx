import styled from 'styled-components';
import React from 'react';
import { connect } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd'
import { updateSimulatorSelectionState, updateInputScreenState } from '../../../../lib/redux/actions/uiActions';
import { setSelectedComponent } from '../../../../lib/redux/actions/dataActions'
import { addOrUpdateHeadline, emptySelectedComponent } from '../../../../lib/redux/actions/dataActions'
import TextareaAutosize from 'react-autosize-textarea';
import { useMutation } from '@apollo/react-hooks';
import { syncInputScreenDataMutation } from '../../../../lib/sync';



const Headline = props => {
    const [syncInputScreen,resp] = useMutation(syncInputScreenDataMutation)

    const handleSelection = (props) => {
        let selectedComponentId = props.component.id
        if(props.component.id != props.uiState.inputScreen.simulator.selectedComponentId){
            syncInputScreen({variables:{
                components:
                JSON.stringify(props.dataState.inputScreen.components),
                htype:JSON.stringify(props.dataState.inputScreen[props.dataState.inputScreen.selectedHtype])
            }})
        props.updateSimulatorSelectionState({selectedComponentId})
        props.setSelectedComponent({selectedComponentId})
        props.updateInputScreenState("HEADLINE_INPUT")
        } else {
        selectedComponentId = "empty"
        props.updateSimulatorSelectionState({selectedComponentId})
        props.setSelectedComponent({selectedComponentId})
        props.updateInputScreenState("MENU")
        }
    }
    /*
    const handleKeyDown = (e) => {
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight}px`; 
        // In case you have a limitation
        // e.target.style.height = `${Math.min(e.target.scrollHeight, limit)}px`;
    }
    

    const handleHeadline = (e) => {
        const type = props.uiState.menu.htype
        const headline = e.target.value
        const selectedHtypeId = props.dataState.selectedHtypeId
        const selectedComponentId = props.dataState.selectedComponentId
        const dispatch = "UPDATE_HEADLINE"
        props.addOrUpdateHeadline({ type, headline, selectedHtypeId, dispatch, selectedComponentId })
    }
    */
    
        return (<Draggable draggableId={props.component.id} index={props.index}>
        {provided =>( 
        <Container
            key = {props.component.id}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            onClick={() => handleSelection(props)}
            datatype={props.component.id == props.uiState.inputScreen.simulator.selectedComponentId ? "-0.2vh":"0" }
            property={props.component.id == props.uiState.inputScreen.simulator.selectedComponentId ? "dashed":"none" }
            >
                <HeadlineText>{JSON.parse(props.component.content).headline}</HeadlineText>
        </Container>
        )
        }
    </Draggable>)
    
}
//            <HeadlineText>{JSON.parse(props.component.content).headline}</HeadlineText>

const mapStateToProps = state => {
    return { uiState: state.ui, dataState: state.data, updateInputScreenState: state.updateInputScreenState, updateSimulatorSelectionState:state.updateSimulatorSelectionState};
};
export default connect(mapStateToProps,{updateSimulatorSelectionState, setSelectedComponent, updateInputScreenState,addOrUpdateHeadline})(Headline);


const Container = styled.div`
    height:auto;
    width:98%;
    outline: 0px solid transparent;
    word-wrap: break-word;
    padding:1%;
    border: ${props => props.property} 0.2vh;
    margin: ${props => props.datatype};
    border-radius:2.5vh;
    display:flex;
    align-content:center;
`

const  HeadlineText = styled.h1`
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

const HeadlineText2 = styled.textarea`
    font-weight: lighter;
    height: 94%;
    width: 90%;
    font-size:3vh;
    margin:0;
    padding:0.5vh;
    text-align:center;
    resize:none;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;
    align-self:center;
    border:0;
    display:flex;
    :focus {
        outline:none;
        caret-color:salmon;
    }
`


