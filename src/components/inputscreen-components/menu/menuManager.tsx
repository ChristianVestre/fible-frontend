import styled from 'styled-components';
import React from 'react';
import { connect } from 'react-redux';
import Menu from './menu'
import HeadlineInput from './headlinInput';
import SubheadlineInput from './subheadlineInput';

class MenuManager extends React.Component<{state:any}> {
    
    menuChoice = () => {
           switch(this.props.state.menu.show){
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

    render(){
        return<Container>
            {this.menuChoice()}
        </Container>
    }
}

const mapStateToProps = state => {
    return {state:state.ui};
  };

export default connect(mapStateToProps)(MenuManager);

const Container = styled.div`
    margin:0;
    width:50%;
    height:100vh;
    display:flex;
    border-right: solid 0.1vw lightgray;
`
