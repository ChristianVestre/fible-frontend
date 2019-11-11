import Link from 'next/link';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import { Provider } from 'react-redux';
//import {store, persistor} from '../redux/store';
import store from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react'

const RouteManagement = props => (
    <Provider store={store}>
        <Container>
            <Images>
                <HeaderImage src="/logo_fible.png" alt="my image"></HeaderImage>
                <Link href="/">
                    <BackImage src="/back.svg"></BackImage>
                </Link>
            </Images>
            <Title>Welcome Christian, here are your routes!</Title>

            <DynamicRouteSelector></DynamicRouteSelector>
        </Container>
    </Provider>
);


/*
const RouteManagement = props => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <Container>
            <Images>
                <HeaderImage src="/logo_fible.png" alt="my image"></HeaderImage>
                <Link href="/">
                    <BackImage src="/back.svg"></BackImage>
                </Link>
            </Images>
            <Title>Welcome Christian, here are your routes!</Title>

            <DynamicRouteSelector></DynamicRouteSelector>
        </Container>
        </PersistGate>
    </Provider>
);

*/

export default RouteManagement


const DynamicRouteSelector = dynamic(
    () => import('../components/route-management/selectorManager'),
    { ssr: false }
)

const Title = styled.h2`
    position:absolute;
    top:3%;
    font-size: 2.5em;
    color:black;
    border:none;
    background:none;
    text-decoration: none;
    padding-left:1em;  
    font-weight:lighter;
    text-align:center;
    margin:0;
    padding:0;
`


const Images = styled.div`
    height:8em;
    margin:0;
    padding-left:1em;
    position:absolute;
    top:1%;
    left:0%;

`


const HeaderImage = styled.img`
    height:4em;
    width:7em;
    padding-left:2em;
    padding-top:1em;
    padding-bottom:2em;
    position: absolute;
    margin:0;
    z-index:1;

`
const BackImage = styled.img`
    padding-top:0.5em;
    height:2em;
    width:2em;
    z-index:1;
    position: absolute;
`


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
    align-content:center;
    justify-content:center;
`
