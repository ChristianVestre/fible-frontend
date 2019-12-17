import styled from 'styled-components';
import React from 'react';
import { connect } from 'react-redux';
import Selector from './selectorManager';
import StopsAndPois from './stopsandpoi-components/sandpManager'




const RouteManagementStateManager = props => {

    const SelectorChoice = (props) => {
     //   console.log(props.state.htypes.getRoutes)
            switch(props.uiState.routeMgmt.selector.managerUiCode){
                case("RO"):{
                    return <OneSelectorWrapper>
                    <Selector type="routes"/>
                    </OneSelectorWrapper>
                }
                case("ROST"):{
                    return<TwoSelectorsWrapper>
                    <Selector type="routes" />
                    <Selector type="stops" />
                    </TwoSelectorsWrapper>
                }
                case("ROSTPO"):{
                    return<ThreeSelectorsWrapper>
                    <Selector type="routes" />
                    <Selector type="stops" />
                    <Selector type="pois" /> 
                    </ThreeSelectorsWrapper>   
                }
                case("MAST"):{
                    return <ManagerWrapper>
                    <StopsAndPois type="stops" />
                    </ManagerWrapper>
                }
                case("MAPO"):{
                    return <ManagerWrapper>
                    <StopsAndPois type="pois" />
                    </ManagerWrapper>
                }
                default:{
                    return <OneSelectorWrapper>
                    <Selector type="routes"/>
                    </OneSelectorWrapper>
                }
            }
    }

    return(
        <Container>
            {SelectorChoice(props)}
        </Container>
    )
    }

const mapStateToProps = state => {
    return {uiState:state.ui, dataState:state.data};
  };

//export default RouteManagementStateManager
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