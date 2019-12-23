import styled from 'styled-components';
import React from 'react';
import { connect } from 'react-redux';
import Menu from './menu'
import HeadlineInput from './headlinInput';
import SubheadlineInput from './subheadlineInput';

const MenuManager = props => {
    const menuChoice = (props) => {
            switch(props.uiState.inputScreen.inputMenu.show){
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

const mapStateToProps = state => {
    return {uiState:state.ui};
};

export default connect(mapStateToProps)(MenuManager);

const Container = styled.div`
    margin:0;
    width:50%;
    height:100vh;
    display:flex;
    border-right: solid 0.1vw lightgray;
`
