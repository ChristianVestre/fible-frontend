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
import { loadUser, loadHtypeData } from '../redux/actions/dataActions';


const Inputscreen = (props) => {
    console.log(props)
    return(  <Container>

        </Container>)
};
//            <MenuManager/><Simulator/>
//
Inputscreen.getInitialProps = async ({reduxStore, me, apolloClient}) => {

    const routesQuery = gql`query getHtypes 
    {   
        getRouteWithComponents{route{id name ownerid components}}
    }`
    let data = await apolloClient.query({query:routesQuery})
    reduxStore.dispatch(loadUser(me))

   // reduxStore.dispatch(loadComponent({route, components}))
  
    //const routes = await context.apolloClient.query({query:inputScreenQuery})
    //return {routes:reduxtest.state.ROUTES}

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
    withApollo,
    withAuth,
    withRedux,
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
