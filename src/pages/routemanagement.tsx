import Link from 'next/link';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import Title from '../components/route-management/title'
import SelectorManager from '../components/route-management/stateManager';
import { connect } from 'react-redux';
import LogoutButton from './../components/shared-components/logoutButton'
import { withApollo } from '../lib/apollo';
import React from 'react';
import { withRedux } from '../redux/redux';
import { compose } from 'redux';
import  {withAuth} from '../lib/auth';
import gql from 'graphql-tag';




const RouteManagement = (props) => {
    return(
        <Container>
            <Images>
                <HeaderImage src="/logo_fible.png" alt="my image"></HeaderImage>
                <Link href="/">
                    <BackImage src="/back.svg"></BackImage>
                </Link>
            </Images>
            <Title name={props.me.name}/>
            <LogoutButton/>
            <SelectorManager routes={props.routes} stops={null} pois={null}></SelectorManager>
        </Container>
    )
};

RouteManagement.getInitialProps = async (context) => {

    const routesQuery = gql`query routes {getRoutes
        {id owner name}
    }`
  //  console.log(context.reduxStore.getState())

   return {routes:await context.apolloClient.query({query:routesQuery})}

  }
  


const mapStateToProps = state => {
    return { selectorState: state.selector, uiState:state.ui,dataState:state.data };
};
const enhance = compose(
    withRedux,
    withApollo,
    withAuth,
    connect(mapStateToProps, null),
  )
export default enhance(RouteManagement);

/*
const DynamicRouteSelector = dynamic(
    () => import('../components/route-management/selectorManager'),
    { ssr: false }
)
*/


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
