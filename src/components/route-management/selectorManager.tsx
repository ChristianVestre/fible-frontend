import styled from 'styled-components';
import React from 'react';
import { connect } from 'react-redux';
import Selector from './selector';




class SelectorManager extends React.Component<{selectorState:any}> {
    
    SelectorChoice = () => {
            if (this.props.selectorState.ROUTES.selected == false && this.props.selectorState.STOPS.selected == false){
                   return <OneSelectorWrapper>
                   <Selector type="ROUTES"/>
                   </OneSelectorWrapper>
                
            } else if (this.props.selectorState.ROUTES.selected == true && this.props.selectorState.STOPS.selected == false){
                    return<TwoSelectorsWrapper>
                    <Selector type="ROUTES"/>
                    <Selector type="STOPS"/>
                    </TwoSelectorsWrapper>
            } else if (this.props.selectorState.ROUTES.selected == true && this.props.selectorState.STOPS.selected == true){
                    return<ThreeSelectorsWrapper>
                    <Selector type="ROUTES"/>
                    <Selector type="STOPS"/>
                    <Selector type="POIS"/>
                    </ThreeSelectorsWrapper>    
            } else if (this.props.selectorState.ROUTES.selected == false && this.props.selectorState.STOPS.selected == true){
                    return<OneSelectorWrapper>
                    <Selector type="ROUTES"/>
                    </OneSelectorWrapper>
            }
    }

    render(){
        return<Container>
            {this.SelectorChoice()}
        </Container>
    }
}

const mapStateToProps = state => {
    return {selectorState:state.selector};
  };

export default connect(mapStateToProps)(SelectorManager);

const Container = styled.div`
    width:100vw;
    height:80vh;
    position:absolute;
    bottom:3vh;
`
const OneSelectorWrapper = styled.div`
    position:relative;
    width:30vw;
    left:35vw;
    height:100%;
    margin:0;
    padding:0;
    align-content:center;
    display:flex;
    flex-direction:row;
    bottom:5%;
`

const TwoSelectorsWrapper = styled.div`
    position:relative;
    left:20vw;
    width:60vw;
    height:100%;
    margin:0;
    padding:0;
    align-content:center;
    display:flex;
    flex-direction:row;
    bottom:5%;
`
const ThreeSelectorsWrapper = styled.div`
    position:relative;
    margin:0;
    padding:0;
    width:90vw;
    height:100%;
    left:5vw;
    align-content:center;
    display:flex;
    flex-direction:row;
    bottom:5%;
`