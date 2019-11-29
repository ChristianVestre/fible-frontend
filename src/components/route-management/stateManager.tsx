import styled from 'styled-components';
import React from 'react';
import { connect } from 'react-redux';
import Selector from './selector';
import StopsAndPois from './stops&poi-components/stop&poiManager'




class RouteManagementStateManager extends React.Component<{uiState:any, routes:any, stops:any, pois:any}> {
    
    SelectorChoice = () => {
            switch(this.props.uiState.selector.managerUiCode){
                case("RO"):{
                    return <OneSelectorWrapper>
                    <Selector type="ROUTES" routes={this.props.routes}/>
                    </OneSelectorWrapper>
                }
                case("ROST"):{
                    return<TwoSelectorsWrapper>
                    <Selector type="ROUTES" routes={this.props.routes}/>
                    <Selector type="STOPS" stops={this.props.stops} />
                    </TwoSelectorsWrapper>
                }
                case("ROSTPO"):{
                    return<ThreeSelectorsWrapper>
                    <Selector type="ROUTES" routes={this.props.routes} />
                    <Selector type="STOPS" stops={this.props.stops} />
                    <Selector type="POIS" pois={this.props.pois} /> 
                    </ThreeSelectorsWrapper>   
                }
                case("MA"):{
                    return <ManagerWrapper>
                    <StopsAndPois/>
                    </ManagerWrapper>
                }
                default:{
                    return <OneSelectorWrapper>
                    <Selector type="ROUTES" routes={this.props.routes}/>
                    </OneSelectorWrapper>
                }
            }
    }

    render(){
        return<Container>
            {this.SelectorChoice()}
        </Container>
    }
}

const mapStateToProps = state => {
    return {uiState:state.ui};
  };

export default connect(mapStateToProps)(RouteManagementStateManager);

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
const ManagerWrapper = styled.div`
    position:relative;
    margin:0;
    padding:0;
    width:80vw;
    height:96%;
    left:10vw;
    align-content:center;
    justify-content:center;
    display:flex;
    flex-direction:row;
    bottom:5%;
    border: 1px solid lightgray;
    border-radius:0.5vh;
    top:0;


`