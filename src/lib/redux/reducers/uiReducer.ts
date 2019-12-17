import {
    REMOVE_ROUTE, UPDATE_ROUTE_STATE,
    INITIALIZE_INPUT_SCREEN_UI,

    UPDATE_SIMULATOR_SELECTION,
    STOP_AND_POI_MANAGER_CONTROLLER,
    SET_TITLE,

    UPDATE_ROUTEMGMT_STATE,
    LOAD_STOP_AND_POI_MANAGER_STATE,
    UPDATE_INPUT_SCREEN_STATE,
    UPDATE_SIMULATOR_SELECTION_STATE,



} from "../actions/types";

/*simulator states
*/



export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_ROUTEMGMT_STATE: {
            const selectedId = action.payload.content.selectedId
            const htype = action.payload.content.htype
            let managerUiCode = "RO"
            let selectedroutes = ""
            let selectedstops = ""
            let selectedpois = ""
            if (htype == "routes" && state.routeMgmt.selector.selectedroutes != selectedId) {
                managerUiCode = "ROST"
                selectedroutes = selectedId
                selectedstops = ""
                selectedpois = ""
            } else if (htype == "routes" && state.routeMgmt.selector.selectedroutes == selectedId) {
                managerUiCode = "RO"
                selectedroutes = ""
                selectedstops = ""
                selectedpois = ""
            } else if (htype == "stops" && state.routeMgmt.selector.selectedstops != selectedId) {
                managerUiCode = "ROSTPO"
                selectedroutes = state.routeMgmt.selector.selectedroutes
                selectedstops = selectedId
                selectedpois = ""
            } else if (htype == "stops" && state.routeMgmt.selector.selectedstops == selectedId) {
                managerUiCode = "ROST"
                selectedroutes = state.routeMgmt.selector.selectedroutes
                selectedstops = ""
                selectedpois = ""
            } else if (htype == "pois" && state.routeMgmt.selector.selectedpois != selectedId) {
                managerUiCode = "ROSTPO"
                selectedroutes = state.routeMgmt.selector.selectedroutes
                selectedstops = state.routeMgmt.selector.selectedstops
                selectedpois = selectedId
            } else if (htype == "pois" && state.routeMgmt.selector.selectedpois == selectedId) {
                managerUiCode = "ROSTPO"
                selectedroutes = state.routeMgmt.selector.selectedroutes
                selectedstops = state.routeMgmt.selector.selectedstops
                selectedpois = ""
            }

            return {
                ...state,
                routeMgmt: {
                    ...state.routeMgmt,
                    selector: {
                        ...state.routeMgmt.selector,
                        selectedroutes: selectedroutes,
                        selectedstops: selectedstops,
                        selectedpois: selectedpois,
                        managerUiCode: managerUiCode

                    }
                }
            }
        }

        case LOAD_STOP_AND_POI_MANAGER_STATE: {
            if (state.routeMgmt.selector.managerUiCode != "MA") {
                const htype = action.payload.content.htype
                return {

                    ...state,
                    routeMgmt: {
                        ...state.routeMgmt,
                        selector: {
                            ...state.routeMgmt.selector,
                            lastManagerUiCode: state.routeMgmt.selector.managerUiCode,
                            htype: htype,
                            managerUiCode: "MA",
                        }

                    }
                }
            } else {
                return {
                    ...state,
                    routeMgmt: {
                        ...state.routeMgmt,
                        selector: {
                            ...state.routeMgmt.selector,
                            managerUiCode: state.routeMgmt.selector.lastManagerUiCode,
                        }
                    }
                }
            }
        }
        //--------------------------------------------------- update --------------------------------------------------
        case UPDATE_INPUT_SCREEN_STATE: {
            const selectedDispatch = action.payload.content
            return {
                ...state,
                inputScreen: {
                    ...state.inputScreen,
                    inputMenu: {
                        ...state.inputScreen.inputMenu,
                        //which component is shown in the menu //menu, headline input, image gallery etc.

                        show: selectedDispatch
                    }
                }
            }
        }
        case UPDATE_SIMULATOR_SELECTION_STATE: {
            const selectedComponentId = action.payload.content.selectedComponentId
            const input = action.payload.content.input
            if (input == "YES") {
                return {
                    ...state,
                    inputScreen: {
                        ...state.inputScreen,
                        simulator: {
                            ...state.inputScreen.simulator,
                            selectedComponentId: selectedComponentId,
                        }
                    }
                }
            } else {
                if (state.inputScreen.simulator.selected == selectedComponentId) {
                    return {
                        ...state,
                        inputScreen: {
                            ...state.inputScreen,
                            simulator: {
                                ...state.inputScreen.simulator,
                                selectedComponentId: "empty",
                            }
                        }
                    }
                }
                else {
                    return {
                        ...state,
                        inputScreen: {
                            ...state.inputScreen,
                            simulator: {
                                ...state.inputScreen.simulator,
                                selectedComponentId: selectedComponentId,
                            }
                        }
                    }
                }
            }
        }





        default:
            return state
    }

}




const initialState = {

    routeMgmt: {
        selector: {
            lastManagerUiCode: "",
            selectedroutes: "",
            selectedstops: "",
            selectedpois: "",
            managerUiCode: "RO",
            htype: "",
        },
        columnOrder: ["column-1", "column-2", "column-3"],
        title: "",
    },
    inputScreen: {
        inputMenu: {
            htype: "routes",
            //which component is shown in the menu
            show: "MENU",
            routes: [{ name: "Headline", id: "headlineInput", dispatch: "HEADLINE_INPUT", type:"HEADLINE" },
            { name: "Subheadline", id: "subheadlineInput", dispatch: "SUBHEADLINE_INPUT", type:"SUBHEADLINE" },
            { name: "Image Gallery", id: "imageGalleryInput", dispatch: "IMAGE_GALLERY_INPUT", type:"IMAGE_GALLERY" },
            ],
            stops: [{ name: "Headline", id: "headlineInput", dispatch: "HEADLINE_INPUT", type:"HEADLINE" },
            { name: "Subheadline", id: "subheadlineInput", dispatch: "SUBHEADLINE_INPUT",type:"SUBHEADLINE" },
            { name: "Image Gallery", id: "imageGalleryInput", dispatch: "IMAGE_GALLERY_INPUT",type:"IMAGE_GALLERY"  },
            ],
            pois: [{ name: "Headline", id: "headlineInput", dispatch: "HEADLINE_INPUT", type:"HEADLINE" },
            { name: "Subheadline", id: "subheadlineInput", dispatch: "SUBHEADLINE_INPUT", type:"SUBHEADLINE" },
            { name: "Image Gallery", id: "imageGalleryInput", dispatch: "IMAGE_GALLERY_INPUT",type:"IMAGE_GALLERY"},
            ]
        },
        simulator: {
            show: "routes",
            selected: "empty"
        },


    }
}

















        //----------------------------------------------
/*

        case STOP_AND_POI_MANAGER_CONTROLLER: {
            if (state.routeMgmt.selector.managerUiCode != "MA") {
                const htype = action.payload.content.htype
                return {
                    ...state,
                    selector: {
                        ...state.selector,
                        lastManagerUiCode: state.selector.managerUiCode,
                        htype: htype,
                        managerUiCode: "MA",
                    }
                }
            } else {
                return {
                    ...state,
                    selector: {
                        ...state.selector,
                        managerUiCode: state.selector.lastManagerUiCode,
                    }
                }
            }
        }

        case SET_TITLE: {
            const title = action.payload.content.title
            return {
                ...state,
                title: title
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
            if (input == "YES") {
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
*/