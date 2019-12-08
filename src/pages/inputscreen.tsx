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
import { withRedux } from '../lib/redux/redux';
import { withAuth } from '../lib/auth';
import gql from 'graphql-tag';
import Cookies from 'js-cookie'
import { loadUser, loadHtypeData, initializeInputScreen } from '../lib/redux/actions/dataActions';
import { initializeInputScreenUi } from '../lib/redux/actions/uiActions';


const Inputscreen = (props) => {
    console.log(props)
    return(  
        <Container>
              <MenuManager/>
              <Simulator/>
        </Container>)
};
//          
//
Inputscreen.getInitialProps = async ({reduxStore, me, apolloClient}) => {
    

    const routesQuery = gql`query getHtypes 
    {   getRoutes{id ownerid components}
        getPois{id ownerid components}
        getStops{id ownerid components}
        getHtypeWithComponents{
            htype{
                route{id name ownerid components}
                stop{id name ownerid components}
                poi{id name ownerid components}
            } 
            components{id content type}}
    }`
    let data = await apolloClient.query({query:routesQuery})
    let htype
    for(let item of Object.keys(data.data.getHtypeWithComponents.htype)){
        let itemValue = data.data.getHtypeWithComponents.htype[item]
        if(itemValue != null && item != "__typename"){htype=item} 
    }
    //console.log(htype)
    const htypes = {getRoutes:data.data.getRoutes,
                    getStops:data.data.getStops,
                    getPois:data.data.getPois}
    //console.log(htypes)
    reduxStore.dispatch(loadUser(me))
    reduxStore.dispatch(loadHtypeData({data:htypes}))
    reduxStore.dispatch(initializeInputScreenUi({htype:htype}))
    //console.log(data.data.getHtypeWithComponents.htype[htype])
    reduxStore.dispatch(initializeInputScreen({htype:data.data.getHtypeWithComponents.htype[htype],components:data.data.getHtypeWithComponents.components}))
  //  reduxStore.dispatch(s)
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
