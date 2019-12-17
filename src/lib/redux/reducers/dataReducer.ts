import {
    UPDATE_COMPONENTS_ORDER,
    HEADLINE, INITIALIZE_HTYPE, DELETE_HTYPE,
    EMPTY_SELECTED_COMPONENT_ID, SET_SELECTED_COMPONENT,
    CLEAN_NONSAVED_HTYPES, LOAD_USER, CLEAN_USER, LOAD_HTYPE_DATA,
    INITIALIZE_INPUTSCREEN_DATA, LOAD_ROUTEMGMT_DATA, LOAD_INPUTSCREEN_DATA,
    UPDATE_STOP_AND_POI_DATA,
    DATA_ADD_NEW_COMPONENT,
    DATA_UPDATE_COMPONENT
} from "../actions/types";
import uuid from "uuid/v4";
import Cookie from 'js-cookie';

//HTYPE is the hierarchy type, aka route, stop, etc
//DATA REDUCER + UI REDUCER + ROUTE MANAGEMENT SCREEN REDUCER

//make a reducer that cleans up the routes stops etc when you go to the route management screen.



export default function (state = initialState, action) {
    switch (action.type) {
        case LOAD_ROUTEMGMT_DATA:{
            const {htypes} = action.payload.content
            const {user} = action.payload.content
            const content = {}
            for(let item of Object.keys(htypes)) {
            let key = item.substring(3,).toLowerCase()
            content[key] =htypes[item].reduce((result, attri) => { 
                if(attri){
                result[attri.id] = attri;
                }
            return result;
            }, {}) 
            }
            return {
                ...state,
                routeMgmt:{
                    user:{
                    ...user,
                    routes:htypes.getRoutes[0] === null ? []:htypes.getRoutes ,
                    stops:htypes.getStops[0] === null ? []:htypes.getStops ,
                    pois:htypes.getPois[0] === null ? []:htypes.getPois 
                                
                    },
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
            }
            case INITIALIZE_INPUTSCREEN_DATA:{
                const {htype} = action.payload.content;
                const {user} = action.payload.content;
                const htypeid = htype.substring(0, 2) + "_" + uuid();
                return {
                    ...state,
                        inputScreen:{
                            ...state.inputScreen,
                            user: {
                                ...state.inputScreen.user,
                                [htype]: [...state.inputScreen.user[htype], htypeid]
                    },
                    selectedHtypeId: htypeid,
                    selectedHtype:htype +"s",
                    [htype]: {
                        ...state[htype],
                        //taking the first two letters of the hierarchy type and combining it with a unique id of length 8
                        [htypeid]: {
                            //take the name of the account owner
                            //saved:false,
                            id:htypeid,
                            owner: user.name,
                            //name to be filled out when the route is finished
                            name: "",
                            components: [],
                        }
                    },
                    }
                }
                };
            
            case LOAD_INPUTSCREEN_DATA:{
                const {htype} = action.payload.content;
                const {htypeData} = action.payload.content;
                const {user} = action.payload.content;
                const {componentsArray} = action.payload.content;
                console.log(componentsArray)
                const htypeid = htypeData[htype].id;
                let components = componentsArray.reduce((result, attri) => { 
                        if(attri){
                        result[attri.id] = attri;
                        }
                    return result;
                    }, {}) 
                    let componentIdsArray = componentsArray.reduce((result, attri) => { 
                        if(attri){
                        result.push(attri.id)
                        }
                    return result;
                    }, []) 
                return {
                    ...state,
                        inputScreen:{
                            ...state.inputScreen,
                            user: {
                                ...user,
                    },
                    selectedHtypeId: htypeid,
                    selectedHtype:htype +"s",
                    [htype+"s"]: {
                        ...state[htype+"s"],
                        //taking the first two letters of the hierarchy type and combining it with a unique id of length 8
                        [htypeid]: {
                            //take the name of the account owner
                            //saved:false,
                            id:htypeid,
                            owner: user.name,
                            //name to be filled out when the route is finished
                            name: "",
                            components: componentIdsArray,
                        }
                    },
                    components:{
                        ...components
                    }
                
                    }
                };
            }
            case UPDATE_STOP_AND_POI_DATA:{
                const {htype} = action.payload.content;
                const {dispatch} = action.payload.dispatch;
                const {htypeParent} = action.payload.content;
                const {htypeid} = action.payload.content;
                const {routeid} = action.payload.content;
                const index = state.routeMgmt.user[htype].indexOf(htypeid)
                let routes;
                let stops;
                //const newOrder = Array.from(state.inputScreen.user[htypeParent]);
                if(htype == "poi") {
                    let {stopid} = action.payload.content.stopid
                    let route = state.routeMgmt.routes[routeid].pois
                    let stop = state.routeMgmt.routes[stopid].pois
                    if(dispatch == "ADD"){
                        route = route.push(htypeid)
                        stop = stop.push(htypeid)
                    }else if(dispatch == "REMOVE"){
                        const stopIndex = state.routeMgmt.stops[stopid].pois.indexOf(htypeid)
                        const routeIndex = state.routeMgmt.routes[routeid].pois.indexOf(htypeid)
                        route = route.splice(routeIndex,1);
                        stop = stop.splice(stopIndex,1);
                    }
                return {
                    ...state,
                    routeMgmt:{
                        ...state.routeMgmt,
                        routes:{
                            ...state.routeMgmt.routes,
                            [routeid]:{
                                ...state.routeMgmt.routes[routeid],
                                pois:route,
                            }
                        },
                        stops:{
                            ...state.routeMgmt.stops,
                            [stopid]:{
                                ...state.routeMgmt.stops[stopid],
                                pois:stop
                            }
                        }
                }
                };
            } else {
                let route = state.routeMgmt.routes[routeid].stops
                if(dispatch == "ADD"){
                    route = route.push(htypeid)
                }else if(dispatch == "REMOVE"){
                    const routeIndex = state.routeMgmt.routes[routeid].pois.indexOf(htypeid)
                    route = route.splice(routeIndex,1);
                }
            return {
                ...state,

                routeMgmt:{
                    ...state.routeMgmt,
                    routes:{
                        ...state.routeMgmt,
                        [routeid]:{
                            ...state.routeMgmt[routeid],
                            stops:route
                        },
                    }
                }
            }
            };
            }
            case DATA_ADD_NEW_COMPONENT:{
                const {htype} = action.payload.content
                const {selectedHtypeId} = action.payload.content
                const {type} = action.payload.content
                const {user} = action.payload.content
                const idSuffix = type.substring(0,2).toLowerCase() + "_"
                const selectedComponentId = idSuffix + uuid()
                //console.log(action.payload.content)
                //console.log(state.inputScreen[htype])
                const newComponentsArray =  [...state.inputScreen[htype][selectedHtypeId].components,selectedComponentId]
                return {
                    ...state,
                    inputScreen:{
                        ...state.inputScreen,
                        selectedComponentId: selectedComponentId,
                        [htype]: {
                            ...state.inputScreen[htype],
                            [selectedHtypeId]: {
                                ...state.inputScreen[htype][selectedHtypeId],
                                components:newComponentsArray,
                            }
                        },
                        components: {
                            ...state.inputScreen.components,
                            [selectedComponentId]: {
                                id: selectedComponentId,
                                onwnerId:user.id,
                                ownerName:user.name,
                                parentId:selectedHtypeId,
                                type: type,
                                content: "{}"
                            }
                        },
                    }
                }
            }
            case DATA_UPDATE_COMPONENT:{
                const {content} = action.payload.content
                const {selectedComponentId} = action.payload.content
                return {
                    ...state,
                    inputScreen:{
                        ...state.inputScreen,
                    components:{
                            ...state.inputScreen.components,
                            [selectedComponentId]: {
                                ...state.inputScreen.components[selectedComponentId],
                                content: content
                            }
                        }
                    }
                }
            }
            case (UPDATE_COMPONENTS_ORDER): {
                const newOrder = action.payload.content.newOrder
                const htype = action.payload.content.htype
                const selectedHtypeId = action.payload.content.selectedHtypeId
                return {
                    ...state,
                    inputScreen:{
                        ...state.inputScreen,
                    [htype]: {
                        ...state.inputScreen[htype],
                        [selectedHtypeId]: {
                            ...state.inputScreen[htype][selectedHtypeId],
                            components: newOrder,
                        }
                    }
                    }
                }
            };
                case EMPTY_SELECTED_COMPONENT_ID: {
                    return {
                        ...state,
                        selectedComponentId: "empty",
                    }
                }
                case SET_SELECTED_COMPONENT: {
                    const selectedComponentId = action.payload.content.selectedComponentId
                    return {
                        ...state,
                        inputScreen:{
                            ...state.inputScreen,
                            selectedComponentId: selectedComponentId,
                        }
                    }
                }
            default:
                    return state
        }

    }



    const initialState = {

        routeMgmt: {
            user: {
                name: "",
                routes: [],
                stops: [],
                pois: [],
                email: "",
            },
            routes: {},
            stops: {},
            pois: {},
        },
        inputScreen: {
            user: {

            },
            selectedHtypeId: "",
            selectedComponentId: "empty",
            selectedHtype:"",
            routes:{
            },
            pois:{},
            stops:{},
            components: {},
        },
        
    
}
/*




        case LOAD_HTYPE_DATA: {
            const content = {}
            for (let item of Object.keys(action.payload.content.data)) {
                //to not create a component object in the user state
                let key = item.substring(3).toLowerCase()
                console.log(key)
                content[key] = action.payload.content.data[item].reduce((result, attri, index) => {
                    if (attri) {
                        result[attri.id] = attri;
                    } //a, b, c
                    return result;
                }, {})
            }

            return {
                ...state,
                user:{
                    ...state.user,
                    routes:action.payload.content.data.getRoutes[0] === null ? []:action.payload.content.data.getRoutes ,
                    stops:action.payload.content.data.getStops[0] === null ? []:action.payload.content.data.getStops ,
                    pois:action.payload.content.data.getPois[0] === null ? []:action.payload.content.data.getPois 
                }
                routes: {
                    ...content["routes"]
                },
                stops: {
                    ...content["stops"]
                },
                pois: {
                    ...content["pois"]
                }
            }
        }

        case LOAD_USER: {
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
        case CLEAN_USER: {
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
                routes: {},
                stops: {},
                pois: {},
            }
        }
        case INITIALIZE_HTYPE: {
            //const selectedDispatch = action.payload.content.dispatch;
            const htype = action.payload.content.htype;
            const htypeid = htype.substring(0, 2) + "_" + uuid
            return {
                ...state,
                user: {
                    ...state.data.inputScreen.user,
                    [htype]: [...state.data.inputScreen.user[htype], htypeid]
                },
                selectedHtypeId: htypeid,
                [htype]: {
                    ...state[htype],
                    //taking the first two letters of the hierarchy type and combining it with a unique id of length 8
                    [htypeid]: {
                        //take the name of the account owner
                        saved: false,
                        owner: state.data.inputScreen.user.name,
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
            const index = state.data.inputScreen.user[htype].indexOf(htypeid);
            delete state.data.inputScreen.user[htype][index]
            return state
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
                    const headlineId = "HL_" + uuid
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

    }
}




    /*    case (INITIALIZE_INPUTSCREEN): {
            console.log(action.payload.content)
            const { id } = action.payload.content.htype
            const { components } = action.payload.content
            let content = {}
            content = components.reduce((result, attri, index) => {
                if (attri != "") {
                    result[attri.id] = attri;
                } //a, b, c
                return result;
            }, {})
            return {
                ...state,
                selectedHtypeId: id,
                components: content
            }
        }
        default:
            return state;
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
                } */