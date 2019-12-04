import Link from 'next/link';
import styled from 'styled-components';
import {connect} from 'react-redux'

//import store from '../redux/store';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import MenuManager from '../components/inputscreen-components/menu/menuManager'
import Simulator from '../components/inputscreen-components/simulator/simulator';
import { PersistGate } from 'redux-persist/integration/react'
import  dynamic  from 'next/dynamic';
import { withApollo } from '../lib/apollo';
import { compose } from 'redux';
import { withRedux } from '../redux/redux';
import { withAuth } from '../lib/auth';
import gql from 'graphql-tag';
import Cookies from 'js-cookie'


const Inputscreen = (props) => (
        <Container>
            {console.log(props)}
            <MenuManager/>
            <Simulator/>
        </Container>
);

Inputscreen.getInitialProps = async (context) => {
    console.log(Cookies.get('hid'))
    const inputScreenQuery = gql`query getRouteWithComponents{getRouteWithComponents{
        route{id name ownerid components}
    }
    }`
    const routes = await context.apolloClient.query({query:inputScreenQuery})
    const reduxtest = await context.reduxStore.getState()
    //return {routes:reduxtest.state.ROUTES}
console.log(routes)
}
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
const mapStateToProps = state => {
    return { selectorState: state.selector, uiState:state.ui,dataState:state.data };
};
const enhance = compose(
    withRedux,
    withApollo,
    withAuth,
    connect(mapStateToProps, null),
  )
export default enhance(Inputscreen);

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
