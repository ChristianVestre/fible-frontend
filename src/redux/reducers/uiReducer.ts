import { REMOVE_ROUTE, UPDATE_ROUTE_STATE, INITIALIZE_INPUT_SCREEN_UI, UPDATE_INPUT_SCREEN_UI, UPDATE_SIMULATOR_SELECTION } from "../actions/types";



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
            title: "Stop",
            ids: ["s213141", "s54321"],
        },
        "column-3": {
            id: "column-3",
            title: "Poi",
            ids: ["p1314134"]
        }
    },
    columnOrder: ["column-1", "column-2", "column-3"],
    menu: {

        htype: "ROUTES",
        //which component is shown in the menu
        show: "MENU",
        ROUTES: [{ name: "Headline", id: "headlineInput", dispatch: "HEADLINE_INPUT" },
        { name: "Subheadline", id: "subheadlineInput", dispatch: "SUBHEADLINE_INPUT" },
        { name: "Image Gallery", id: "imageGalleryInput", dispatch: "IMAGE_GALLERY_INPUT" },
        ],
        STOPS: [{ name: "Headline", id: "headlineInput", dispatch: "HEADLINE_INPUT" },
        { name: "Subheadline", id: "subheadlineInput", dispatch: "SUBHEADLINE_INPUT" },
        { name: "Image Gallery", id: "imageGalleryInput", dispatch: "IMAGE_GALLERY_INPUT" },
        ],
        POIS: [{ name: "Headline", id: "headlineInput", dispatch: "HEADLINE_INPUT" },
        { name: "Subheadline", id: "subheadlineInput", dispatch: "SUBHEADLINE_INPUT" },
        { name: "Image Gallery", id: "imageGalleryInput", dispatch: "IMAGE_GALLERY_INPUT" },
        ]
    },
    simulator: {
        show: "ROUTES",
        selected: "empty"

    },
}

/*simulator states
*/

export default function (state = initialState, action) {

    switch (action.type) {
        case INITIALIZE_INPUT_SCREEN_UI: {
            const selectedDispatch = action.payload.content.dispatch
            return {
                ...state,
                menu: {
                    ...state.menu,
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
                menu: {
                    ...state.menu,
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
