
import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons'
import Router from 'next/router'
import {useDispatch, useSelector} from 'react-redux';
import GridElement from './gridElement'
import { dataHandleHtypeChange } from '../../../lib/redux/actions/dataActions';
import { DataState, UiState } from '../../../types/reduxTypes';
import { uiUpdateInputScreenFlag } from '../../../lib/redux/actions/uiActions';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';


const Menu = props => {
    const dispatch = useDispatch()
    const dataState = useSelector((state:DataState) => state.data)
    const uiState = useSelector((state:UiState) => state.ui)
    const [updateHtype, { data }] = useMutation(gql`
    mutation updateHtype($htype:String!){
        updateHtype(htype:$htype)
    }`);
    const backHandler = () => {
        dispatch(uiUpdateInputScreenFlag())
        Router.push({
            pathname: '/routemanagement',
        })
    }
    const handleRouteNameChange = (e) => {
        console.log(e.target.value)
        dispatch(dataHandleHtypeChange({
            changedHtype:{...dataState[dataState.selectedHtype][dataState.selectedHtypeId],name:e.target.value},
            htype:dataState.selectedHtype,
            htypeId:dataState.selectedHtypeId
        }))
    }
    const handleHtypeUpdate = (e) => {
        console.log(dataState[dataState.selectedHtype][dataState.selectedHtypeId])
        updateHtype({variables:{htype:JSON.stringify(dataState[dataState.selectedHtype][dataState.selectedHtypeId])}})
        //setRoute
    }

    return( 
        <Container>
                <HeaderImage src="/logo_fible.png" alt="my image"></HeaderImage>
                <BackImage src="/back.svg" onClick={() => backHandler()}></BackImage>
        <Headline value=
        {dataState[dataState.selectedHtype][dataState.selectedHtypeId].name}
        onChange={(e) => {handleRouteNameChange(e)}
        }
        onBlur={(e) => {handleHtypeUpdate(e)}}
        />

        <MenuWrapper>
            {uiState.inputScreen.inputMenu[dataState.selectedHtype].map((elem) => {return <GridElement key={elem.id} name={elem.name} dispatch={elem.dispatch} type={elem.type}/>})}

        </MenuWrapper>
        </Container>
    )

}


export default Menu;


const Container = styled.div`
    margin:0;
    width:100%;
    height:100vh;
    display:flex;
    

`
const MenuWrapper = styled.div`
    display:flex;
    flex-direction:row;
    width:50vw;
    height:80%;
    margin:0;
    padding:0;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-self: flex-start;
    position: absolute;
    bottom: 0;

`

/*
const GridElement = styled.div`
    min-width: ${100 / 2}%;
    border: 1px solid black;
    box-sizing: border-box;
    height:10vh;
    display:flex;


`
*/
const Headline = styled.input`
    position: absolute;
    text-align:center;
    top:10%;
    left:25%;
    transform: translate(-50%, 0); 
    margin:0;
    padding:0;
    border: none;
    font-size:3vh;
    font-weight:lighter;
    :focus {
        outline:none;
        caret-color:salmon;
    }
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