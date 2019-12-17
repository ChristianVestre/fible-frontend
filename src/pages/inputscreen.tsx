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
import { loadUser, loadHtypeData, loadInputScreenData } from '../lib/redux/actions/dataActions';
import { initializeInputScreenUi } from '../lib/redux/actions/uiActions';


const Inputscreen = props => {
    console.log(props)
    return(  
        <Container key={props.routeid}>
            <MenuManager/>
            <Simulator/>
        </Container>)
};
//          
//
Inputscreen.getInitialProps = async ({reduxStore, me, apolloClient, query}) => {
    
    const { id } = query;
    console.log(id)
    const routesQuery = gql`
    query getHtypes 
    {   getHtypeWithComponents{
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
    const key = data.data.getHtypeWithComponents.htype[htype].id
    console.log(key)
    console.log(htype)
    //console.log(htypes)
    reduxStore.dispatch(loadInputScreenData({htypeData:data.data.getHtypeWithComponents.htype, user:me, htype:htype, componentsArray:data.data.getHtypeWithComponents.components}))
    return {"routeid":key}
}

const mapStateToProps = state => {
    return { uiState:state.ui,dataState:state.data };
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
