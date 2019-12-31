import Link from 'next/link';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import Title from '../components/route-management/title'
import RouteManagementStateManager from '../components/route-management/stateManager';
import { useDispatch, useSelector } from 'react-redux';
import { withApollo } from '../lib/apollo';
import React, { useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { dataLoadUser, dataLoadRouteMgmtData } from '../lib/redux/actions/dataActions';
import { UiState, DataState } from '../types/reduxTypes';
import Router from 'next/router';
import { GrayRotatingSpinner } from '../components/loading-component/rotatingSpinner';
import LogoutButton from '../components/shared-components/logoutButton';


const RouteManagement = (props) => {
    const dispatch = useDispatch();
    const dataState = useSelector((state: DataState) => state.data);
    const [dispatchSent, setDispatchSent,] = useState(false)
    const { loading, error, data } = useQuery(
        gql`query getHtypes 
    {   
        getRoutes{id ownerid name components stops pois}
        getPois{id ownerid name components}
        getStops{id ownerid name components pois}
        me{id name email routes pois stops}
    }`)

    useEffect(() => {
        // console.log(data)
        //   console.log(error)
        if (!loading) {
            let htype;
            if (!data || !data.me.id) {
                Router.replace("/")
                return
            }
            const htypes = {
                routes:data.getRoutes,
                stops:data.getStops,
                pois:data.getPois
            }
            dispatch(dataLoadRouteMgmtData({htypes:htypes, user:data.me}))
            setDispatchSent(true)
        }
    }, [loading])


    return (
        !dispatchSent?
        <GrayRotatingSpinner/>:
        <Container>
            <Images>
                <HeaderImage src="/logo_fible.png" alt="my image"></HeaderImage>
            </Images>
            <Title name={dataState.user.name}/>
            <LogoutButton/>
            <RouteManagementStateManager/>      
        </Container>
    )
};
//                <Link href="/">
//<BackImage src="/back.svg"></BackImage>
//</Link>
export default dynamic(() => Promise.resolve(withApollo(RouteManagement)), {
    ssr: false
})


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
