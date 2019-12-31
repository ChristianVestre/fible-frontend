import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import MenuManager from '../components/inputscreen/menu/menuManager'
import Simulator from '../components/inputscreen/simulator/simulator';
import dynamic from 'next/dynamic';
import { withApollo } from '../lib/apollo';
import gql from 'graphql-tag';
import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { RotateSpinner } from "react-spinners-kit";
import Router from 'next/router';
import { dataLoadInputScreen, dataLoadComponents } from '../lib/redux/actions/dataActions';
import { DataState, UiState } from '../types/reduxTypes';
import { uiUpdateInputScreenFlag } from '../lib/redux/actions/uiActions';



const Inputscreen = props => {

    const htypeid = sessionStorage.getItem("hid")
    const dataState = useSelector((state:DataState) => state.data)
    const uiState = useSelector((state:UiState) => state.ui)
    const dispatch = useDispatch();
    const [dispatchSent, setDispatchSent,] = useState(false)
    const componentIds = htypeid == undefined ? [] : dataState[dataState.selectedHtype][htypeid].components
    const { loading, error, data } = useQuery(gql`
    query getComponents($ids:String)
    {   getComponents(ids:$ids){
        id content type
        }
        me{id name routes pois stops}
    }
    `
    ,{variables:{ids:JSON.stringify(componentIds)}})
    /*const { loading, error, data } = useQuery(gql
    query getHtypes($id:String)
    {   getHtypeWithComponents(id:$id){
            htype{
                route{id name ownerid components}
                stop{id name ownerid components}
                poi{id name ownerid components}
            } 
            components{id content type}}
        me{id name routes pois stops}
    }, { variables: { id: htypeid } })
*/
    useEffect(() => {
        // console.log(data)
        //   console.log(error)
        if (!loading) {
            let htype;
            if (!data || !data.me ||!data.me.id) {
                Router.replace("/")
            }
            /*  for (let item of Object.keys(data.getHtypeWithComponents.htype)) {
                let itemValue = data.getHtypeWithComponents.htype[item]
                if (itemValue != null && item != "__typename") { htype = item }
            }*/
            // console.log(data.getHtypeWithComponents.htype[htype].id)
            if (uiState.inputScreen.inputMenu.reload){
            dispatch(dataLoadComponents({componentsArray:data.getComponents}))
            dispatch(uiUpdateInputScreenFlag())
            }
            //dispatch(dataLoadInputScreen({ htypeData: data.getHtypeWithComponents.htype, user: data.me, htype: htype, componentsArray: data.getHtypeWithComponents.components }))
            setDispatchSent(true)
        }
    }, [loading])


    //console.log(loading)
    return (
        (!dispatchSent) ?
            <SpinnerContainer>
                <RotateSpinner color="gray" size={60} />
            </SpinnerContainer> :
            <Container>
                <MenuManager />
                <Simulator />
            </Container>
    )
};

export default dynamic(() => Promise.resolve(withApollo(Inputscreen)), {
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
