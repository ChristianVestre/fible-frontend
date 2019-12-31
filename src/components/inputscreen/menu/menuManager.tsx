import styled from 'styled-components';
import React from 'react';
import { connect, useSelector } from 'react-redux';
import Menu from './menu'
import HeadlineInput from './headlineInput';
import SubheadlineInput from './subheadlineInput';
import { UiState } from '../../../types/reduxTypes';

const MenuManager = props => {
    const uiState = useSelector((state:UiState) => state.ui)
    const menuChoice = (props) => {
            switch(uiState.inputScreen.inputMenu.show){
                case("MENU"): {
                    return<Menu/>
                }
                case("HEADLINE_INPUT"):{
                    return<HeadlineInput/>
                }
                case("SUBHEADLINE_INPUT"):{
                    return<SubheadlineInput/>
                }
        }
    }

        return(<Container>
            {menuChoice(props)}
        </Container>)
    
}

export default MenuManager;

const Container = styled.div`
    margin:0;
    width:50%;
    height:100vh;
    display:flex;
    border-right: solid 0.1vw lightgray;
`
