import {
    DATA_LOAD_USER,
    DATA_LOAD_ROUTE_MGMT_DATA,
    DATA_LOAD_INPUT_SCREEN,
    DATA_UPDATE_COMPONENTS_ORDER,
    DATA_UPDATE_HTYPE_ORDER,
    DATA_UPDATE_CHILD_HTYPE_ORDER,
    DATA_UPDATE_COMPONENT,
    DATA_ADD_NEW_COMPONENT,
    DATA_HANDLE_HTYPE_CHANGE,
    DATA_SET_SELECTED_COMPONENT,
    DATA_LOAD_COMPONENTS,
    DATA_SET_SELECTED_HTYPE,
    DATA_DELETE_SELECTED_COMPONENT,
} from "../actions/types";

//HTYPE is the hierarchy type, aka route, stop, etc
//DATA REDUCER + UI REDUCER + ROUTE MANAGEMENT SCREEN REDUCER

//make a reducer that cleans up the routes stops etc when you go to the route management screen.



export default function (state = initialState, action) {
    switch (action.type) {
        case DATA_LOAD_USER: {
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
        case DATA_LOAD_ROUTE_MGMT_DATA: {
            const { htypes } = action.payload.content
            const { user } = action.payload.content
            const content = {}
            for (let item of Object.keys(htypes)) {
                content[item] = htypes[item].reduce((result, attri) => {
                    if (attri) {
                        result[attri.id] = attri;
                    }
                    return result;
                }, {})
            }
            return {
                ...state,
                user: {
                    ...user
                },
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
        case DATA_LOAD_INPUT_SCREEN: {
            const { htype } = action.payload.content;
            const { htypeData } = action.payload.content;
            const { user } = action.payload.content;
            const { componentsArray } = action.payload.content;
            const htypeid = htypeData[htype].id;
            let components = componentsArray.reduce((result, attri) => {
                if (attri) {
                    result[attri.id] = attri;
                }
                return result;
            }, {})
            let componentIdsArray = componentsArray.reduce((result, attri) => {
                if (attri) {
                    result.push(attri.id)
                }
                return result;
            }, [])
            return {

                ...state,
                user: {
                    ...user
                },
                selectedHtypeId: htypeid,
                selectedHtype: htype,
                [htype]: {
                    ...state[htype],
                    //taking the first two letters of the hierarchy type and combining it with a unique id of length 8
                    [htypeid]: {
                        ...htypeData[htype]
                    }
                },
                components: {
                    ...components
                }
            }
        };
        case DATA_LOAD_COMPONENTS: {
            const { componentsArray } = action.payload.content
            let components = componentsArray.reduce((result, attri) => {
                if (attri) {
                    result[attri.id] = attri;
                }
                return result;
            }, {})
            return {
                ...state,
                components: {
                    ...components
                }
            }
        }
        case DATA_UPDATE_COMPONENTS_ORDER: {
            const newOrder = action.payload.content.newOrder
            const htype = action.payload.content.htype
            const selectedHtypeId = action.payload.content.selectedHtypeId
            return {
                ...state,
                [htype]: {
                    ...state[htype],
                    [selectedHtypeId]: {
                        ...state[htype][selectedHtypeId],
                        components: newOrder,
                    }
                }
            }
        }
        case DATA_UPDATE_HTYPE_ORDER: {
            const newOrder = action.payload.content.newOrder
            const htype = action.payload.content.htype
            return {
                ...state,
                user: {
                    ...state.user,
                    [htype]: newOrder
                }
            }
        }
        case DATA_UPDATE_CHILD_HTYPE_ORDER: {
            const newOrder = action.payload.content.newOrder
            const htype = action.payload.content.htype
            const parentHtype = action.payload.content.parentHtype
            const parentHtypeId = action.payload.content.parentHtypeId
            return {
                ...state,
                [parentHtype]: {
                    ...state[parentHtype],
                    [parentHtypeId]: {
                        ...state[parentHtype][parentHtypeId],
                        [htype]: newOrder
                    }
                }
            }
        }
        case DATA_ADD_NEW_COMPONENT: {
            const { htype } = action.payload.content
            const { selectedHtypeId } = action.payload.content
            const { component } = action.payload.content;
            const newComponentsArray = [...state[htype][selectedHtypeId].components, component.id]
            console.log(component)
            return {
                ...state,
                selectedComponentId: component.id,
                [htype]: {
                    ...state[htype],
                    [selectedHtypeId]: {
                        ...state[htype][selectedHtypeId],
                        components: newComponentsArray,
                    }
                },
                components: {
                    ...state.components,
                    [component.id]: {
                        id: component.id,
                        ownerId:state.user.id,
                        ownerName:state.user.name,
                        parentId:selectedHtypeId,
                        type: component.type,
                        content: component.content,
                    }
                },
            }
        }
        case DATA_UPDATE_COMPONENT: {
            const { content } = action.payload.content
            const { selectedComponentId } = action.payload.content
            return {
                ...state,
                components: {
                    ...state.components,
                    [selectedComponentId]: {
                        ...state.components[selectedComponentId],
                        content: content
                    }
                }

            }
        }
        case (DATA_UPDATE_COMPONENTS_ORDER): {
            const newOrder = action.payload.content.newOrder
            const htype = action.payload.content.htype
            const selectedHtypeId = action.payload.content.selectedHtypeId
            return {
                ...state,
                [htype]: {
                    ...state[htype],
                    [selectedHtypeId]: {
                        ...state[htype][selectedHtypeId],
                        components: newOrder,
                    }
                }
            }
        };
        case DATA_HANDLE_HTYPE_CHANGE: {
            const { changedHtype } = action.payload.content
            const { htypeId } = action.payload.content
            const { htype } = action.payload.content
            console.log(changedHtype)
            console.log(htypeId)
            return {
                ...state,
                [htype]: {
                    ...state[htype],
                    [htypeId]: {
                        ...changedHtype
                    }
                }
            }
        };
        case DATA_SET_SELECTED_COMPONENT: {
            const selectedComponentId = action.payload.content.selectedComponentId
            return {
                ...state,
                selectedComponentId: selectedComponentId,
            }
        }
        case DATA_DELETE_SELECTED_COMPONENT: {
            console.log(state)
            const component = state.components[state.selectedComponentId];
            const htype = state[state.selectedHtype][state.selectedHtypeId]
            const newComponentsArray = Array.from(htype.components);
            console.log(component)
            newComponentsArray.splice(newComponentsArray.indexOf(component.id), 1);
            const selectedComponentId = state.selectedComponentId
            delete state.components[selectedComponentId]
            return {
                ...state,
                [state.selectedHtype]: {
                    ...state[state.selectedHtypeId],
                    [state.selectedHtypeId]: {
                        ...htype,
                        components: newComponentsArray,
                    }
                }
            }
        }
        case DATA_SET_SELECTED_HTYPE: {
            const { selectedHtype } = action.payload.content
            const { selectedHtypeId } = action.payload.content
            return {
                ...state,
                selectedHtype: selectedHtype,
                selectedHtypeId: selectedHtypeId
            }
        }
        default:
            return state
    }


}



const initialState = {
    user: {
        id:"",
        name: "",
        routes: [],
        stops: [],
        pois: [],
        email: "",
    },
    selectedHtypeId: "",
    selectedComponentId: "empty",
    selectedHtype: "",
    routes: {},
    pois: {},
    stops: {},
    components: {},
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