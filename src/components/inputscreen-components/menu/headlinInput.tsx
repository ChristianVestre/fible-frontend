import React from 'react';
import styled from 'styled-components';
import { addOrUpdateHeadline, emptySelectedComponent } from '../../../redux/actions/dataActions'
import { updateInputScreenUi, updateSimulatorSelection } from '../../../redux/actions/uiActions'
import { connect } from 'react-redux';



class HeadlineInput extends React.Component<{ updateInputScreenUi: Function, dataState: any, uiState: any, addOrUpdateHeadline: Function, emptySelectedComponent: Function, updateSimulatorSelection:Function }> {

    handleInputMenuUpdate = () => {
        const dispatch = "MENU"
        //  console.log(dispatch)
        this.props.updateInputScreenUi(dispatch);
        this.props.emptySelectedComponent();
        const selectedComponentId = "empty"
        this.props.updateSimulatorSelection({selectedComponentId})
    };

    handleHeadline = (e) => {
        const type = this.props.uiState.menu.htype
        const headline = e.target.value
        const selectedHtypeId = this.props.dataState.selectedHtypeId
        let dispatch = ""
        const selectedComponentId = this.props.dataState.selectedComponentId
        if(selectedComponentId == "empty") {
            dispatch = "ADD_HEADLINE" 
        }else {
            dispatch = "UPDATE_HEADLINE"
        }
        this.props.addOrUpdateHeadline({ type, headline, selectedHtypeId, dispatch, selectedComponentId })
        if(selectedComponentId != this.props.uiState.simulator.selectedComponentId) {
            const input = "YES"
            this.props.updateSimulatorSelection({selectedComponentId, input})
        }

    }
    showText = () => {
        let showText;
        return this.props.dataState[this.props.uiState.menu.htype][this.props.dataState.selectedHtypeId] != undefined &&
            this.props.dataState[this.props.uiState.menu.htype][this.props.dataState.selectedHtypeId].components[this.props.dataState.selectedComponentId] != undefined ?
            showText = this.props.dataState[this.props.uiState.menu.htype][this.props.dataState.selectedHtypeId].components[this.props.dataState.selectedComponentId].headline :
            showText = ""

    }
    render() {

        return (
            <Container>
                <HeaderImage src="/logo_fible.png" alt="my image"></HeaderImage>
                <BackImage src="/back.svg" onClick={this.handleInputMenuUpdate}></BackImage>
                <Headline>Headline Input</Headline>
                <InputWrapper>
                    <StyledTextArea onChange={(e) => this.handleHeadline(e)} value={this.props.dataState[this.props.uiState.menu.htype][this.props.dataState.selectedHtypeId] != undefined &&
                        this.props.dataState[this.props.uiState.menu.htype][this.props.dataState.selectedHtypeId].components[this.props.dataState.selectedComponentId] != undefined ?
                        this.props.dataState[this.props.uiState.menu.htype][this.props.dataState.selectedHtypeId].components[this.props.dataState.selectedComponentId].headline :
                        ""} />
                </InputWrapper>
                <FontSizeDiv>
                    <FontSizeText>
                        Font Size
                </FontSizeText>
                    <FontSizeInput type="number" min="0" step="1" />
                </FontSizeDiv>
            </Container>

        )
    }

}

const mapStateToProps = state => {
    return { dataState: state.data, uiState: state.ui, updateInputScreenUi: state.updateInputScreenUi };
};



export default connect(mapStateToProps, { updateInputScreenUi, addOrUpdateHeadline, emptySelectedComponent, updateSimulatorSelection })(HeadlineInput);


const Container = styled.div`
    margin:0;
    width:100%;
    height:100vh;
    display:flex;

`

const HeaderImage = styled.img`
    height: 6vh;
    width: 6vw;
    position: relative;
    left: 50%;
    margin:0;
    top:2%;
    transform: translate(-50%, 0); 

`
const BackImage = styled.img`
    padding-top:0.5em;
    height:2em;
    width:2em;
    position: absolute;
    top:1%;
    left:1%;
`

const Headline = styled.h1`
    position: absolute;;
    top:10%;
    left:25%;
    margin:0;
    padding:0;
    font-weight:lighter;
    transform: translate(-50%, 0); 

`
const StyledTextArea = styled.textarea`
    height: 94%;
    width: 97%;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;
    align-self:center;
    font-size:4vh;
    border:0;
    display:flex;
    resize:none;
    :focus {
        outline:none;
        caret-color:salmon;
    }
`

const InputWrapper = styled.div`
    position:absolute;
    width: 44vw;
    top:20%;
    height: 11vh;
    border-radius: 2vh;
    margin:2vw;
    padding:1vw;
    border:solid;
    border-color:lightgrey;
    border-width:0.05em;
`

const FontSizeDiv = styled.div`
    position:absolute;
    display:flex;
    flex-direction:row;
    top:40vh;
    left:5%;
    width:10vw;
`

const FontSizeText = styled.p`
    font-weight:lighter;
`
const FontSizeInput = styled.input`
    align-self:center;
    justify-self:flex-end;
    width:2vw;
    margin-left:1vw;
    height:2vh;
    right:0;
    border-radius:0.5vh;
    border:solid;
    border-color:lightgrey;
    border-width:0.05em;
    :focus {
        outline:none;
        caret-color:salmon;
    }
    direction: rtl
`