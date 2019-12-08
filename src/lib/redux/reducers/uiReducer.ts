import { REMOVE_ROUTE, UPDATE_ROUTE_STATE, 
    INITIALIZE_INPUT_SCREEN_UI, 
    UPDATE_INPUT_SCREEN_UI, 
    UPDATE_SIMULATOR_SELECTION,
    UPDATE_SELECTOR_MANAGER_STATE,
    STOP_AND_POI_MANAGER_CONTROLLER,
    SET_TITLE,
 } from "../actions/types";



const initialState = {
    routes: {
        "h12345": {
            id: "h12345",
            headline: "Christian's Norway Route",
            subheadline: "Fjords you just have to explore",
            stops: [
                "Bergen",
                "Stavanger",
                "Molde",
                "Ålesund"
            ],
            attractions: ["Hiking", "Swimming", "Nature"]
        },
        "h54321": {
            id: "h54321",
            headline: "Paul's South Tyrol Route",
            subheadline: "Explore the Dolomites",
            stops: [
                "Bolzano",
                "Trento",
            ],
            attractions: ["Hiking", "Swimming", "Nature", "Food"]
        },
        "h12354": {
            id: "h12354",
            headline: "Simon's Allgäu Route",
            subheadline: "Experience Neuschweinstein and so much more!",
            stops: [
                "Mammendorf",
                "Füssen",
            ],
            attractions: ["Hiking", "Swimming", "Nature", "Sking"]
        },
    },
    stops: {
        "s213141": {
            id: "s213141",
            headline: "Bergen",
            subheadline: "Byen ombringet av fjell",
            pois: [
                "restaurant",
                "accommodation",
                "activities",
            ],
            location: { lat: 1.2222, lng: 1445666 }
        },
        "s54321": {
            id: "s54321",
            headline: "Stavanger",
            subheadline: "Oljehovedstaden",
            pois: [
                "restaurant",
                "accommodation",
                "activities",
            ],
            location: { lat: 1.5555, lng: 1.214134 }
        }
    },
    pois: {
        "p1314134": {
            id: "p1314134",
            headline: "Bergen Fjordrestaurant",
            subheadline: "Fantastisk fisk og sjømat!",
            location: { lat: 1.2222, lng: 1445666 },
            address: "Bryggen 15a",
            website: "www.bergen-fjordrestaurant.no"
        }
    },

    columns: {
        "column-1": {
            id: "column-1",
            title: "Routes",
            ids: ["h12345", "h54321", "h12354"],
        },
        "column-2": {
            id: "column-2",
            title: "Stops",
            ids: ["s213141", "s54321"],
        },
        "column-3": {
            id: "column-3",
            title: "Pois",
            ids: ["p1314134"]
        }
    },
    columnOrder: ["column-1", "column-2", "column-3"],
    title:"",
    inputMenu: {
        htype: "routes",
        //which component is shown in the menu
        show: "MENU",
        routes: [{ name: "Headline", id: "headlineInput", dispatch: "HEADLINE_INPUT" },
        { name: "Subheadline", id: "subheadlineInput", dispatch: "SUBHEADLINE_INPUT" },
        { name: "Image Gallery", id: "imageGalleryInput", dispatch: "IMAGE_GALLERY_INPUT" },
        ],
        stops: [{ name: "Headline", id: "headlineInput", dispatch: "HEADLINE_INPUT" },
        { name: "Subheadline", id: "subheadlineInput", dispatch: "SUBHEADLINE_INPUT" },
        { name: "Image Gallery", id: "imageGalleryInput", dispatch: "IMAGE_GALLERY_INPUT" },
        ],
        pois: [{ name: "Headline", id: "headlineInput", dispatch: "HEADLINE_INPUT" },
        { name: "Subheadline", id: "subheadlineInput", dispatch: "SUBHEADLINE_INPUT" },
        { name: "Image Gallery", id: "imageGalleryInput", dispatch: "IMAGE_GALLERY_INPUT" },
        ]
    },
    simulator: {
        show: "routes",
        selected: "empty"
    },
    selector:{
        lastManagerUiCode:"",
        selectedROUTES:"",
        selectedSTOPS:"",
        selectedPOIS:"",
        managerUiCode:"RO",
        htype:"",
    }
}

/*simulator states
*/

export default function (state = initialState, action) {

    switch (action.type) {
        case UPDATE_SELECTOR_MANAGER_STATE: {
            const selectedId = action.payload.content.selectedId
            const htype = action.payload.content.htype
            let managerUiCode = "RO"
            let selectedROUTES = ""
            let selectedSTOPS = ""
            let selectedPOIS = ""
            if(htype == "routes" && state.selector.selectedROUTES != selectedId){
                managerUiCode = "ROST"
                selectedROUTES = selectedId
                selectedSTOPS = ""
                selectedPOIS = ""
            } else if (htype == "routes" && state.selector.selectedROUTES == selectedId){
                managerUiCode = "RO"
                selectedROUTES = ""
                selectedSTOPS = ""
                selectedPOIS = ""
            }else if (htype == "stops" && state.selector.selectedSTOPS != selectedId){
                managerUiCode = "ROSTPO"
                selectedROUTES = state.selector.selectedROUTES
                selectedSTOPS = selectedId
                selectedPOIS = ""
            }else if (htype == "stops" && state.selector.selectedSTOPS == selectedId){
                managerUiCode = "ROST"
                selectedROUTES = state.selector.selectedROUTES
                selectedSTOPS = ""
                selectedPOIS = ""
            }else if (htype == "pois" && state.selector.selectedPOIS != selectedId){
                managerUiCode = "ROSTPO"
                selectedROUTES = state.selector.selectedROUTES
                selectedSTOPS = state.selector.selectedSTOPS
                selectedPOIS = selectedId
            }else if (htype == "pois" && state.selector.selectedPOIS == selectedId){
                managerUiCode = "ROSTPO"
                selectedROUTES = state.selector.selectedROUTES
                selectedSTOPS = state.selector.selectedSTOPS
                selectedPOIS = ""
            }

            return {
                ...state,
                selector:{
                    ...state.selector,
                    selectedROUTES:selectedROUTES,
                    selectedSTOPS:selectedSTOPS,
                    selectedPOIS:selectedPOIS,
                    managerUiCode:managerUiCode
                }
            }
        }

        case STOP_AND_POI_MANAGER_CONTROLLER:{
            if(state.selector.managerUiCode != "MA"){
            const htype = action.payload.content.htype
            return {
                ...state,
                selector:{
                    ...state.selector,
                    lastManagerUiCode:state.selector.managerUiCode,
                    htype:htype,
                    managerUiCode:"MA",
                }
            }
            }   else {
                return {
                    ...state,
                    selector:{
                        ...state.selector,
                        managerUiCode:state.selector.lastManagerUiCode,
                    }
                }    
            }
        }

        case SET_TITLE: {
            const title = action.payload.content.title
            return {
                ...state,
                title:title
            }
        }


        case INITIALIZE_INPUT_SCREEN_UI: {
            const selectedDispatch = action.payload.content.dispatch
            return {
                ...state,
                menu: {
                    ...state.inputMenu,
                    //menu for what kind of hierarchy type
                    htype: selectedDispatch,
                    //which component is shown in the menu //menu, headline input, image gallery etc.
                    show: "MENU",
                }

            };
        }
        case UPDATE_INPUT_SCREEN_UI: {
            const selectedDispatch = action.payload.content
            return {
                ...state,
                inputMenu: {
                    ...state.inputMenu,
                    //which component is shown in the menu //menu, headline input, image gallery etc.
                  
                    show: selectedDispatch
                    
                }
            }
        }
        case REMOVE_ROUTE: {
            const index = action.payload.content.removeIndex
            const columnId = action.payload.content.removeColumn;

            return {
                ...state,
                ids: state.columns[columnId].ids.splice(index, 1),
            }
        };
        case UPDATE_ROUTE_STATE: {
            const newOrder = action.payload.content.newOrder
            const columnId = action.payload.content.columnId
            return {
                ...state,
                //   routeIds: newOrder,
                columns: {
                    ...state.columns,
                    [columnId]: {
                        ...state.columns[columnId],
                        ids: newOrder
                    },
                }
            }
        };
        case UPDATE_SIMULATOR_SELECTION: {
            const selectedComponentId = action.payload.content.selectedComponentId
            const input = action.payload.content.input
            if (input == "YES"){
                return {
                    ...state,
                    simulator: {
                        ...state.simulator,
                        selected: selectedComponentId,
                    }
                }
            } else {
            if (state.simulator.selected == selectedComponentId) {
                return {
                    ...state,
                    simulator: {
                        ...state.simulator,
                        selected: "empty",
                    }
                }
            }
            else {
                return {
                    ...state,
                    simulator: {
                        ...state.simulator,
                        selected: selectedComponentId,

                    }
                }
            }
        }
    }

        default:
            return state;
    }
}
