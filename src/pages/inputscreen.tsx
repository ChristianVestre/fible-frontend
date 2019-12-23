import Link from 'next/link';
import styled from 'styled-components';
import { connect, useDispatch } from 'react-redux'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import MenuManager from '../components/inputscreen-components/menu/menuManager'
import Simulator from '../components/inputscreen-components/simulator/simulator';
import { PersistGate } from 'redux-persist/integration/react'
import dynamic from 'next/dynamic';
import { withApollo } from '../lib/apollo';
import { compose } from 'redux';
import { withRedux } from '../lib/redux/redux';
import { withAuth } from '../lib/auth';
import gql from 'graphql-tag';
import Cookies from 'js-cookie'
import { loadUser, loadHtypeData, loadInputScreenData } from '../lib/redux/actions/dataActions';
import { initializeInputScreenUi } from '../lib/redux/actions/uiActions';
import { useEffect, useState } from 'react';
import { ApolloClient } from 'apollo-client';
import { useMutation, useQuery, useLazyQuery } from '@apollo/react-hooks';
import { RotateSpinner } from "react-spinners-kit";
import Router  from 'next/router';



const Inputscreen = props => {

    const htypeid = sessionStorage.getItem("hid")
    const dispatch = useDispatch();
    const [dispatchSent,setDispatchSent, ] = useState(false)
    const { loading, error, data } = useQuery(gql`
    query getHtypes($id:String)
    {   getHtypeWithComponents(id:$id){
            htype{
                route{id name ownerid components}
                stop{id name ownerid components}
                poi{id name ownerid components}
            } 
            components{id content type}}
        me{id name routes pois stops}
    }`,{variables:{id:htypeid}})
    useEffect(() => {
       // console.log(data)
     //   console.log(error)
        if (!loading) { 
            let htype;
            console.log(data)
            if(!data.me.id){
                Router.replace("/")
            }
            
            for (let item of Object.keys(data.getHtypeWithComponents.htype)) {
                let itemValue = data.getHtypeWithComponents.htype[item]
                if (itemValue != null && item != "__typename") { htype = item }
            }
           // console.log(data.getHtypeWithComponents.htype[htype].id)
            dispatch(loadInputScreenData({htypeData: data.getHtypeWithComponents.htype, user: data.me, htype: htype, componentsArray: data.getHtypeWithComponents.components}))
            setDispatchSent(true)
        }
    },[loading])


    //console.log(loading)
    return (
        (!dispatchSent) ? 
        <SpinnerContainer>
        <RotateSpinner color="gray" size={60}/>
        </SpinnerContainer>:
        <Container>
        <MenuManager />
        <Simulator/>  
    </Container>
    )
};
//           <MenuManager/>        
/*(data) ? (
    <Container>
    <MenuManager />
    <Simulator/>  
</Container>
) : (

        <RotateSpinner />
    )*/
//
//

const mapStateToProps = state => {
    return { uiState: state.ui, dataState: state.data, loadInputScreenData: state.loadInputScreenData };
};

const enhance = compose(
    withApollo,
    withAuth,
    withRedux,
    connect(mapStateToProps, { loadInputScreenData }),
)
//export default enhance(Inputscreen);


export default dynamic(() => Promise.resolve(enhance(Inputscreen)), {
    ssr: false
})

const SpinnerContainer = styled.div`
    position:absolute;  
    top:50vh;
    left:50vw;
    transform: translate(-50%, 0); 
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
    align-content:flex-start;
    justify-content:flex-start;
    flex-direction:row;
`
