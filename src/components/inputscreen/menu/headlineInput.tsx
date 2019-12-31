import React from 'react';
import styled from 'styled-components';
import { dataEmptySelectedComponent, dataUpdateComponent } from '../../../lib/redux/actions/dataActions';
import { uiUpdateInputScreenState, uiUpdateSimulatorSelectionState, uiUpdateInputScreenFlag } from '../../../lib/redux/actions/uiActions';
import { useSelector, useDispatch } from 'react-redux';
import TextareaAutosize from 'react-autosize-textarea';
import { useMutation } from '@apollo/react-hooks';
import { DataState, UiState } from '../../../types/reduxTypes';
import gql from 'graphql-tag';


const HeadlineInput = props => {
    const [updateComponent, { data }] = useMutation(gql`
    mutation updateComponent($component:String! $parentHtype:String){
        updateComponent(component:$component parentHtype:$parentHtype)
    }`);
    const dispatch = useDispatch()
    const dataState = useSelector((state:DataState) => state.data)
    const uiState = useSelector((state:UiState) => state.ui)



    const handleInputMenuUpdate = async () => {
        const menuUpdate = "MENU"
        dispatch(uiUpdateInputScreenState(menuUpdate));
        dispatch(dataEmptySelectedComponent());
        const selectedComponentId = "empty"
        dispatch(uiUpdateSimulatorSelectionState({selectedComponentId}))
        console.log(dataState.components[dataState.selectedComponentId])
        updateComponent({variables:{
            component:JSON.stringify(
                dataState.components[dataState.selectedComponentId]
                ),
            parentHtype:JSON.stringify(dataState[dataState.selectedHtype][dataState.selectedHtypeId])
            }
        })
    };

    const handleHeadline = (e) => {
        const type = uiState.inputScreen.inputMenu.htype
        const headline = e.target.value
        const selectedHtypeId = dataState.selectedHtypeId
        const menuUpdate = "UPDATE_HEADLINE"
        const content = '{"headline":"'+headline+'"}'
        const selectedComponentId = dataState.selectedComponentId
        dispatch(dataUpdateComponent({ htype:type, content:content, selectedHtypeId:selectedHtypeId, dispatch:menuUpdate, selectedComponentId:selectedComponentId}))
        if(selectedComponentId != uiState.inputScreen.simulator.selectedComponentId) {
            const input = "YES"
            dispatch(uiUpdateSimulatorSelectionState({selectedComponentId, input}))
        }

    }
    const showText = () => {
        let showText;
        return props.dataState[uiState.inputScreen.inputMenu.htype][dataState.selectedHtypeId] != undefined &&
            props.dataState[uiState.inputScreen.inputMenu.htype][dataState.selectedHtypeId].components[dataState.selectedComponentId] != undefined ?
            showText = props.dataState[uiState.inputScreen.inputMenu.htype][dataState.selectedHtypeId].components[dataState.selectedComponentId].headline :
            showText = ""

    }
        return (
            <Container>
                <HeaderImage src="/logo_fible.png" alt="my image"></HeaderImage>
                <BackImage src="/back.svg" onClick={() => handleInputMenuUpdate()}></BackImage>
                <Headline>Headline Input</Headline>
                <InputWrapper>
                    <StyledTextArea maxRows={10} onChange={(e) => handleHeadline(e)} value={dataState.components[dataState.selectedComponentId] != undefined &&
                        dataState.components[dataState.selectedComponentId].content != undefined ?
                        JSON.parse(dataState.components[dataState.selectedComponentId].content).headline :
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


export default HeadlineInput


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