
import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons'
import Router from 'next/router'
import {connect} from 'react-redux';
import Link from 'next';
import GridElement from './gridElement'
import {deleteHtype} from '../../../lib/redux/actions/dataActions'


const Menu = props => {

    const backHandler = () => {
        Router.push({
            pathname: '/routemanagement',
        })
        const htypeid = props.dataState.inputScreen.selectedHtypeId
        const htype = props.uiState.inputScreen.inputMenu.htype
       // props.deleteHtype({htypeid,htype})
        
    }

    return( 
        <Container>
                <HeaderImage src="/logo_fible.png" alt="my image"></HeaderImage>
                <BackImage src="/back.svg" onClick={() => backHandler()}></BackImage>
        <Headline>{props.uiState.inputScreen.inputMenu.htype}</Headline>
        <MenuWrapper>
            {props.uiState.inputScreen.inputMenu[props.uiState.inputScreen.inputMenu.htype].map((elem) => {return <GridElement key={elem.id} name={elem.name} dispatch={elem.dispatch} type={elem.type}/>})}

        </MenuWrapper>
        </Container>
    )

}

const mapStateToProps = state => {

    return {uiState:state.ui,dataState:state.data,deleteHtype:state.deleteHtype};
};



export default connect(mapStateToProps,{deleteHtype})(Menu);


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
const Headline = styled.h1`
    position: absolute;;
    top:10%;
    left:25%;
    transform: translate(-50%, 0); 
    margin:0;
    padding:0;
    font-weight:lighter;

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