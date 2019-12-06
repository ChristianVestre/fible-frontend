import styled from 'styled-components';
import React from 'react';
import { connect } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd'
import { updateSimulatorSelection, updateInputScreenUi} from '../../../../redux/actions/uiActions'
import { setSelectedComponent } from '../../../../redux/actions/dataActions'
import { addOrUpdateHeadline, emptySelectedComponent } from '../../../../redux/actions/dataActions'
import TextareaAutosize from 'react-autosize-textarea';



class Headline extends React.Component<{component:any, index:any,uiState:any,dataState:any, addOrUpdateHeadline:Function, updateSimulatorSelection:Function, setSelectedComponent:Function, updateInputScreenUi:Function}> {
    handleSelection = () => {
        let selectedComponentId = this.props.component.id
        if(this.props.component.id != this.props.uiState.simulator.selected){
        this.props.updateSimulatorSelection({selectedComponentId})
        this.props.setSelectedComponent({selectedComponentId})
        this.props.updateInputScreenUi("HEADLINE_INPUT")
        } else {
        selectedComponentId = "empty"
        this.props.updateSimulatorSelection({selectedComponentId})
        this.props.setSelectedComponent({selectedComponentId})
        this.props.updateInputScreenUi("MENU")
        }
    }
    handleKeyDown(e) {
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight}px`; 
        // In case you have a limitation
        // e.target.style.height = `${Math.min(e.target.scrollHeight, limit)}px`;
      }
    

    handleHeadline = (e) => {
        const type = this.props.uiState.menu.htype
        const headline = e.target.value
        const selectedHtypeId = this.props.dataState.selectedHtypeId
        const selectedComponentId = this.props.dataState.selectedComponentId
        const dispatch = "UPDATE_HEADLINE"
        this.props.addOrUpdateHeadline({ type, headline, selectedHtypeId, dispatch, selectedComponentId })
    }

    render() {
        return (<Draggable draggableId={this.props.component.id} index={this.props.index}>
        {provided =>( 
        <Container
            key = {this.props.component.id}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            onClick={this.handleSelection}
            datatype={this.props.component.id == this.props.uiState.simulator.selected ? "-0.2vh":"0" }
            property={this.props.component.id == this.props.uiState.simulator.selected ? "dashed":"none" }
            >
            <HeadlineText>{JSON.parse(this.props.component.content).headline}</HeadlineText>
        </Container>
        )
        }
    </Draggable>)
    }
}

const mapStateToProps = state => {
    return { uiState: state.ui, dataState: state.data };
};


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

export default connect(mapStateToProps,{updateSimulatorSelection, setSelectedComponent, updateInputScreenUi,addOrUpdateHeadline})(Headline);

