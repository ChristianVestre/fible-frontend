import {
    UPDATE_INPUT_SCREEN_UI, UPDATE_COMPONENTS_ORDER,
    HEADLINE, INITIALIZE_HTYPE, DELETE_HTYPE,
    EMPTY_SELECTED_COMPONENT_ID, SET_SELECTED_COMPONENT,
    CLEAN_NONSAVED_HTYPES, LOAD_USER, CLEAN_USER, LOAD_HTYPE_DATA,
    INITIALIZE_INPUTSCREEN
} from "../actions/types";
import nanoid from "nanoid";

//HTYPE is the hierarchy type, aka route, stop, etc
//DATA REDUCER + UI REDUCER + ROUTE MANAGEMENT SCREEN REDUCER
const initialState = {
    data:{
        user: {name:""},
        routes:{},
        stops:{},
        pois:{},
    },
    ui:{
        selector:{  
            lastManagerUiCode:"",
            selectedRoute:"",
            selectedStop:"",
            selectedPoi:"",
            managerUiCode:"RO",
            htype:"",
            }
        }
    }

export default function (state = initialState, action) {
    switch(action.type){
        //data
        case LOAD_ROUTEMGMT_DATA:{
        const content = {}
        for(let item of Object.keys(action.payload.content.data.htypes)) {
        let key = item.substring(3,).toLowerCase()
        content[key] = action.payload.content.data[item].reduce((result, attri, index) => { 
            if(attri){
            result[attri.id] = attri;
            }
        return result;
        }, {}) 
        }
        
        return {
            ...state,
            data:{
                user:{
                ...state.data.user,
                routes:action.payload.content.data.htypes.getRoutes[0] === null ? []:action.payload.content.data.htypes.getRoutes ,
                stops:action.payload.content.data.htypes.getStops[0] === null ? []:action.payload.content.data.htypes.getStops ,
                pois:action.payload.content.data.htypes.getPois[0] === null ? []:action.payload.content.data.htypes.getPois 
                            
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
        case INITIALIZE_INPUTSCREEN:{
            const htype = action.payload.content.htype;
            const htypeid = htype.substring(0, 2) + "_" + nanoid(8);
            return {
                ...state,
                data:{
                    ...state.data,
                    user: {
                        ...state.data.user,
                        [htype]: [...state.data.user[htype], htypeid]
                },},
                selectedHtypeId: htypeid,
                [htype]: {
                    ...state[htype],
                    //taking the first two letters of the hierarchy type and combining it with a unique id of length 8
                    [htypeid]: {
                        //take the name of the account owner
                        //saved:false,
                        id:htypeid,
                        owner: state.data.user.name,
                        //name to be filled out when the route is finished
                        name: "",
                        components: [],

                    }
                }
            };
        }
        //ui
        case UPDATE_ROUTEMGMT_UI_SELECTOR_STATE:{
                const selectedId = action.payload.content.selectedId
                const htype = action.payload.content.htype
                let managerUiCode = "RO"
                let selectedROUTES = ""
                let selectedSTOPS = ""
                let selectedPOIS = ""
                if(htype == "routes" && state.ui.selector.selectedRoute != selectedId){
                    managerUiCode = "ROST"
                    selectedROUTES = selectedId
                    selectedSTOPS = ""
                    selectedPOIS = ""
                } else if (htype == "routes" && state.ui.selector.selectedRoute == selectedId){
                    managerUiCode = "RO"
                    selectedROUTES = ""
                    selectedSTOPS = ""
                    selectedPOIS = ""
                }else if (htype == "stops" && state.ui.selector.selectedStop != selectedId){
                    managerUiCode = "ROSTPO"
                    selectedROUTES = state.ui.selector.selectedRoute
                    selectedSTOPS = selectedId
                    selectedPOIS = ""
                }else if (htype == "stops" && state.ui.selector.selectedStop == selectedId){
                    managerUiCode = "ROST"
                    selectedROUTES = state.ui.selector.selectedRoute
                    selectedSTOPS = ""
                    selectedPOIS = ""
                }else if (htype == "pois" && state.ui.selector.selectedPoi != selectedId){
                    managerUiCode = "ROSTPO"
                    selectedROUTES = state.ui.selector.selectedRoute
                    selectedSTOPS = state.ui.selector.selectedStop
                    selectedPOIS = selectedId
                }else if (htype == "pois" && state.ui.selector.selectedPoi == selectedId){
                    managerUiCode = "ROSTPO"
                    selectedROUTES = state.ui.selector.selectedRoute
                    selectedSTOPS = state.ui.selector.selectedStop
                    selectedPOIS = ""
                }
                return {
                    ...state,
                    ui:{
                    ...state.ui,
                    selector:{
                        ...state.ui.selector,
                        selectedROUTES:selectedROUTES,
                        selectedSTOPS:selectedSTOPS,
                        selectedPOIS:selectedPOIS,
                        managerUiCode:managerUiCode
                    }
                    }
                }
            }
            case LOAD_ROUTEMGMT_UI_STOPANDPOI_STATE:{
                if(state.ui.selector.managerUiCode != "MA"){
                    const htype = action.payload.content.htype
                    const managerUiCode = htype == "stops" ? "MAST": "MAPO"
                    // need something to help fill the selectors
                    return {
                        ...state,
                        selector:{
                            ...state.ui.selector,
                            lastManagerUiCode:state.ui.selector.managerUiCode,
                            htype:htype,
                            managerUiCode:"MA",
                        }
                    }
                    }   else {
                        return {
                            ...state,
                            selector:{
                                ...state.ui.selector,
                                managerUiCode:state.ui.selector.lastManagerUiCode,
                            }
                        }    
                    }
                }
            


        }


    }



}