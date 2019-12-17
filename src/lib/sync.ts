import { ApolloClient } from 'apollo-client'
import gql from 'graphql-tag'


export const prepInputScreenDataForSync =  inputScreenState => {
    console.log(inputScreenState)
    const components = JSON.stringify(inputScreenState.components)
    const htype = JSON.stringify({
        route: inputScreenState.routes != undefined ? inputScreenState.routes:null,
        stop: inputScreenState.stops != undefined ? inputScreenState.stops:null,
        poi: inputScreenState.pois != undefined ? inputScreenState.pois:null,
    })
    //@ts-ignore

    return { components: components, htype:htype}

}

export const syncInputScreenDataMutation =    gql`mutation syncInputScreen($components: String, $htype: String!) {
    syncInputScreen(components: $components, htype: $htype ) 
}`