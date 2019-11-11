import Link from 'next/link';
import styled from 'styled-components';
import {connect} from 'react-redux'
import { Provider } from 'react-redux';
//import {store, persistor} from '../redux/store';
import store from '../redux/store';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import MenuManager from '../components/inputscreen-components/menu/menuManager'
import Simulator from '../components/inputscreen-components/simulator/simulator';
import { PersistGate } from 'redux-persist/integration/react'
import  dynamic  from 'next/dynamic';



const InputScreen = props => (
    <Provider store={store}>
        <Container>
            <MenuManager/>
            <DynamicSimulator/>
        </Container>
        </Provider>
);
/*
 const InputScreen = props => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <Container>
            <MenuManager/>
            <Simulator/>
        </Container>
        </PersistGate>
        </Provider>
);

*/
export default InputScreen

const DynamicSimulator = dynamic(
    () => import('../components/inputscreen-components/simulator/simulator'),
    { ssr: false }
)

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    margin:0;
    padding:0;
    background:white;
    display:flex;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    align-content:flex-start;
    justify-content:flex-start;
    flex-direction:row;
`
