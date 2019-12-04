import { UPDATE_INPUT_SCREEN_UI, UPDATE_COMPONENTS_ORDER ,
     HEADLINE, INITIALIZE_HTYPE, DELETE_HTYPE, 
     EMPTY_SELECTED_COMPONENT_ID, SET_SELECTED_COMPONENT, 
     CLEAN_NONSAVED_HTYPES, LOAD_USER, CLEAN_USER, LOAD_HTYPE_DATA } from "../actions/types";
import nanoid from "nanoid";

//HTYPE is the hierarchy type, aka route, stop, etc
//DATA REDUCER + UI REDUCER + ROUTE MANAGEMENT SCREEN REDUCER
const initialState = {


    user: {
        name: "",
        routes: [],
        stops: [],
        pois: [],
        email: "",
    },
    //the id of the hcomponent being worked on
    selectedHtypeId: "",
    selectedComponentId: "empty",
    routes: {},
    stops: {},
    pois: {},

}

//make a reducer that cleans up the routes stops etc when you go to the route management screen.

export default function (state = initialState, action) {

    switch (action.type) {
        case LOAD_HTYPE_DATA:{
            const content = {}

            console.log(action.payload.content.data)
            for(let item of Object.keys(action.payload.content.data)) {
            //to not create a component object in the user state
            if(item.indexOf('get') != -1){
            let key = item.substring(3,).toLowerCase()
            content[key] = action.payload.content.data[item].reduce((result, attri, index) => { 
                if(attri){
                result[attri.id] = attri;
                } //a, b, c
            return result;
            }, {}) 
            }
            }
            return {
                ...state,
             /*   user:{
                    ...state.user,
                    routes:action.payload.content.data.getRoutes[0] === null ? []:action.payload.content.data.getRoutes ,
                    stops:action.payload.content.data.getStops[0] === null ? []:action.payload.content.data.getStops ,
                    pois:action.payload.content.data.getPois[0] === null ? []:action.payload.content.data.getPois 
                },*/
                routes:{
                    ...content["routes"]
                },
                stops:{
                    ...content["stops"]
                },
                pois:{
                    ...content["pois"]
                }
            }
        }

        case LOAD_USER:{
            const { name, email, routes, stops, pois } = action.payload.content;
            return {
                ...state,
                user: {
                    name: name,
                    routes: routes ? routes : [],
                    stops: stops ? stops : [],
                    pois: pois ? pois : [],
                    email: email,
                }
            }
        }
        case CLEAN_USER:{
            return { 
            ...state,
           user: {
                name: '',
                routes: [],
                stops: [],
                pois: [],
                email: '',
            },
            //the id of the hcomponent being worked on
            selectedHtypeId: '',
            selectedComponentId: "empty",
            ROUTES: {},
            STOPS: {},
            POIS: {},}
        }
        case INITIALIZE_HTYPE: {
            //     const selectedDispatch = action.payload.content.dispatch;
            const htype = action.payload.content.htype;
            const htypeid = htype.substring(0, 2) + "_" + nanoid(8);
            return {
                ...state,
                user: {
                    ...state.user,
                    [htype]: [...state.user[htype], htypeid]
                },
                selectedHtypeId: htypeid,
                [htype]: {
                    ...state[htype],
                    //taking the first two letters of the hierarchy type and combining it with a unique id of length 8
                    [htypeid]: {
                        //take the name of the account owner
                        saved:false,
                        owner: state.user.name,
                        //name to be filled out when the route is finished
                        name: "",
                        order: [],
                        components: {},

                    }
                }
            };
        }
        case EMPTY_SELECTED_COMPONENT_ID: {
            return {
                ...state,
                selectedComponentId: "empty",
            }
        }
        case DELETE_HTYPE: {
            const htype = action.payload.content.htype;
            const htypeid = action.payload.content.htypeid;
            delete state[htype][htypeid]
            const index = state.user[htype].indexOf(htypeid);
            delete state.user[htype][index]
            return state
        }
        /*   case FINISH_HTYPE: {
               const selectedDispatch = action.payload.content.dispatch;
               const id = action.payload.content.id
               const htype = action.payload.content.dispatch;
               return {
                   ...state,
   
                       [htype.toLowerCase()]:{
                           ...state.data[htype.toLowerCase()],
                           //taking the first two letters of the hierarchy type and combining it with a unique id of length 8
                           [htype.toLowerCase().substring(0, 2) + "_" + nanoid(8)]:{
                               //take the name of the account owner
                               owner:state.data.user.name,
                               //name to be filled out when the route is finished
                               name:""
                               //location of stops?
                               //pois that belong?
   
                           
                       }
                   }
               };
           },
   */   
        case CLEAN_NONSAVED_HTYPES:{
            const htypes = ["ROUTES","STOPS","POIS"]
           // const htype= action.payload.content.headline
            for(var j in htypes){
            
                    for(let [key] of Object.entries(state[htypes[j]])){
                    if(state[htypes[j]][key].saved !=true){
                         delete state[htypes[j]][key];
                    }
                    }
                }
            return state;
            


        }
        case HEADLINE: {
            const headline = action.payload.content.headline
            const htype = action.payload.content.type
            const htypeid = action.payload.content.selectedHtypeId
            const dispatch = action.payload.content.dispatch
            console.log(headline)
            switch (dispatch) {
                case ("ADD_HEADLINE"): {
                    //create the id because it has not been changed before
                    const headlineId = "HL_" + nanoid(8)
                    //rebuilding the state object to add new data
                    console.log(state)
                    return {
                        ...state,
                        selectedComponentId: headlineId,
                        [htype]: {
                            ...state[htype],
                            [htypeid]: {
                                ...state[htype][htypeid],
                                order: [...state[htype][htypeid].order, headlineId],
                                components: {
                                    ...state[htype][htypeid].components,
                                    [headlineId]: {
                                        id: headlineId,
                                        type: "HEADLINE",
                                        headline: headline

                                    }
                                }
                            }
                        }
                    }
                }
                //case where you want to change the headline but it already exists
                case ("UPDATE_HEADLINE"): {
                    const headlineId = action.payload.content.selectedComponentId
                    return {
                        ...state,
                        [htype]: {
                            ...state[htype],
                            [htypeid]: {
                                ...state[htype][htypeid],
                                components: {
                                    ...state[htype][htypeid].components,
                                    [headlineId]: {
                                        id: headlineId,
                                        type: "HEADLINE",
                                        headline: headline
                                    }
                                }
                            }

                        }
                    }
                }
            }
        }
        case (UPDATE_COMPONENTS_ORDER): {
            const newOrder = action.payload.content.newOrder
            const htype = action.payload.content.htype
            const htypeId = action.payload.content.htypeId
            return {
                ...state,
                [htype]: {
                    ...state[htype],
                    [htypeId]: {
                        ...state[htype][htypeId],
                        order: newOrder,
                    }
                }
            }
        };
        case (SET_SELECTED_COMPONENT): {
            const selectedId = action.payload.content.selectedComponentId
            return {
                ...state,
                selectedComponentId: selectedId,
            }
        }
        default:
            return state;
    }
}

/*
        case HEADLINE: {
            const headline = action.payload.content.headline
            const htype = action.payload.content.type
            const routeId = action.payload.content.routeId
            switch(dispatch){
                case("ADD_HEADLINE"):{
                //create the id because it has not been changed before
                const headlineId = htype.toLowerCase().substring(0, 2) + "_" + nanoid(8)
                //rebuilding the state object to add new data
                return {
                    ...state,
                        data: {
                            ...state.data,
                                [htype.toLowerCase()]:{
                                    ...state.data.route,
                                    [routeId]:{
                                        ...state.data.route[routeId]
                                        order:[...state.data.route[routeId].order, headlineId]
                                        components:{
                                            ...state.data.route[routeId].components
                                            [headlineId]:{
                                                type:"HEADLINE"
                                                headline:headline
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                //case where you want to change the headline but it already exists
                case("UPDATE_HEADLINE"):{
                    const headlineId = action.payload.content.headlineId
                    return {
                    ...state,
                        data: {
                            ...state.data,
                                [htype.toLowerCase()]:{
                                    ...state.data.route,
                                    [routeId]:{
                                        ...state.data.route[routeId]
                                        components:{
                                            ...state.data.route[routeId].components
                                            []:{
                                                type:"HEADLINE"
                                                headline:headline
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }



        */