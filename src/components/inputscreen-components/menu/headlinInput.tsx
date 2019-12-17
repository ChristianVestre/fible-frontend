import React from 'react';
import styled from 'styled-components';
import { addOrUpdateHeadline, emptySelectedComponent, dataUpdateComponent } from '../../../lib/redux/actions/dataActions';
import { updateInputScreenState, updateSimulatorSelectionState } from '../../../lib/redux/actions/uiActions';
import { connect } from 'react-redux';
import TextareaAutosize from 'react-autosize-textarea';
import { prepInputScreenDataForSync, syncInputScreenDataMutation } from '../../../lib/sync';
import { useMutation } from '@apollo/react-hooks';


const HeadlineInput = props => {
    const [syncInputScreen,resp] = useMutation(syncInputScreenDataMutation)
    const handleInputMenuUpdate = async () => {
        const dispatch = "MENU"
        //  console.log(dispatch)
    
        syncInputScreen({variables:{
            components:
            JSON.stringify(props.dataState.inputScreen.components),
            htype:JSON.stringify(props.dataState.inputScreen[props.dataState.inputScreen.selectedHtype])
        }})

        props.updateInputScreenState(dispatch);
        props.emptySelectedComponent();
        const selectedComponentId = "empty"
        props.updateSimulatorSelectionState({selectedComponentId})
    };

    const handleHeadline = (e) => {
        const type = props.uiState.inputScreen.inputMenu.htype
        const headline = e.target.value
        const selectedHtypeId = props.dataState.inputScreen.selectedHtypeId
        let dispatch = "UPDATE_HEADLINE"
        const content = '{"headline":"'+headline+'"}'
        const selectedComponentId = props.dataState.inputScreen.selectedComponentId
        props.dataUpdateComponent({ htype:type, content:content, selectedHtypeId:selectedHtypeId, dispatch:dispatch, selectedComponentId:selectedComponentId})
        if(selectedComponentId != props.uiState.inputScreen.simulator.selectedComponentId) {
            const input = "YES"
            props.updateSimulatorSelectionState({selectedComponentId, input})
        }

    }
    const showText = () => {
        let showText;
        return props.dataState[props.uiState.inputMenu.htype][props.dataState.selectedHtypeId] != undefined &&
            props.dataState[props.uiState.inputMenu.htype][props.dataState.selectedHtypeId].components[props.dataState.selectedComponentId] != undefined ?
            showText = props.dataState[props.uiState.inputMenu.htype][props.dataState.selectedHtypeId].components[props.dataState.selectedComponentId].headline :
            showText = ""

    }
        return (
            <Container>
                <HeaderImage src="/logo_fible.png" alt="my image"></HeaderImage>
                <BackImage src="/back.svg" onClick={() => handleInputMenuUpdate()}></BackImage>
                <Headline>Headline Input</Headline>
                <InputWrapper>
                    <StyledTextArea maxRows={10} onChange={(e) => handleHeadline(e)} value={props.dataState.inputScreen.components[props.dataState.inputScreen.selectedComponentId] != undefined &&
                        props.dataState.inputScreen.components[props.dataState.inputScreen.selectedComponentId].content != undefined ?
                        JSON.parse(props.dataState.inputScreen.components[props.dataState.inputScreen.selectedComponentId].content).headline :
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

const mapStateToProps = state => {
    return { dataState: state.data, uiState: state.ui, addOrUpdateHeadline: state.addOrUpdateHeadline, updateInputScreenState: state.updateInputScreenState, updateSimulatorSelectionState:state.updateSimulatorSelectionState };
};



export default connect(mapStateToProps, { dataUpdateComponent,updateInputScreenState, addOrUpdateHeadline, emptySelectedComponent, updateSimulatorSelectionState })(HeadlineInput);


const Container = styled.div`
    margin:0;
    width:100%;
    height:100vh;
    display:flex;
    flex-direction:column;

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
const StyledTextArea = styled(TextareaAutosize)`
    height: auto;
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
    position:relative;
    width: 44vw;
    top:10%;
    height: auto;
    border-radius: 2vh;
    margin:2vw;
    padding:1vw;
    border:solid;
    border-color:lightgrey;
    border-width:0.05em;
`

const FontSizeDiv = styled.div`
    position: relative;
    top:10%;
    left:10%;
    bottom:0%;
    width:15vw;
    display:flex;
    flex-direction:row;
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