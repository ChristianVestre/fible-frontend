import styled from 'styled-components';
import React from 'react';
import { connect, useSelector } from 'react-redux';
import Selector from './selector/selectorManager';
import StopsAndPois from './stopsandpoi-management/spManager'
import { UiState } from '../../types/reduxTypes';




const RouteManagementStateManager = props => {
    const uiState = useSelector((state: UiState) => state.ui);

    const SelectorChoice = (props) => {
        //   console.log(props.state.htypes.getRoutes)
        switch (uiState.routeMgmt.selector.managerUiCode) {
            case ("RO"): {
                return <OneSelectorWrapper>
                    <Selector type="routes" />
                </OneSelectorWrapper>
            }
            case ("ROST"): {
                return <TwoSelectorsWrapper>
                    <Selector type="routes" />
                    <Selector type="stops" />
                </TwoSelectorsWrapper>
            }
            case ("ROSTPO"): {
                return <ThreeSelectorsWrapper>
                    <Selector type="routes" />
                    <Selector type="stops" />
                    <Selector type="pois" />
                </ThreeSelectorsWrapper>
            }
            case ("MAST"): {
                return <ManagerWrapper>
                    <StopsAndPois type="stops" />
                </ManagerWrapper>
            }
            case ("MAPO"): {
                return <ManagerWrapper>
                    <StopsAndPois type="pois" />
                </ManagerWrapper>
            }
            default: {
                return <OneSelectorWrapper>
                    <Selector type="routes" />
                </OneSelectorWrapper>
            }
        }
    }

    return (
        <Container>
            {SelectorChoice(props)}
        </Container>
    )
}


//export default RouteManagementStateManager
export default RouteManagementStateManager;
const Container = styled.div`
    width:100vw;
    height:80vh;
    position:absolute;
    bottom:5vh;
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
`

const TwoSelectorsWrapper = styled.div`
    position:relative;
    left:20vw;
    width:60vw;
    height:100%;
    margin:0;
    padding:0;
    align-content:center;
    justify-content:center;
    display:flex;
    flex-direction:row;
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
`
const ManagerWrapper = styled.div`
    position:relative;
    margin:0;
    padding:0;
    width:90vw;
    height:100%;
    left:5vw;
    align-content:center;
    justify-content:center;
    display:flex;
    flex-direction:row;
    border: 1px solid lightgray;
    border-radius:0.5vh;
    top:0;



`