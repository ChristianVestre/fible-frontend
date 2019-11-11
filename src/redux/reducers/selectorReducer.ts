import { UPDATE_SELECTOR_MANAGER_STATE } from "../actions/types";

const initialState = {
    ROUTES: {
        selected: false,
        id: ""
    },
    STOPS: {
        selected: false,
        id: ""
    },
    POIS: {
        selected:false,
        id:""
    }

}



export default function (state = initialState, action) {
    
    switch (action.type) {
        case UPDATE_SELECTOR_MANAGER_STATE: {
            const selectedId = action.payload.content.itemId
            const selectedDispatch = action.payload.content.dispatch;
            switch (selectedDispatch) {
                case ("ROUTE_SELECT"): {
                    return {
                        ...state,
                        ROUTES: {
                            selected: true,
                            id: selectedId
                        },
                        STOPS: {
                            selected: false,
                            id:""
                        }
                    }
                }
                case ("ROUTE_DESELECT"): {
                    return {
                        ...state,
                        ROUTES: {
                            selected: false,
                            id: ""
                        },
                        STOPS: {
                            selected: false,
                            id:""
                        }
                    }
                }

                case ("STOP_SELECT"): {
                    return {
                        ...state,
                        STOPS: {
                            selected: true,
                            id: selectedId
                        }
                    }
                }

                case ("STOP_DESELECT"): {
                    return {
                        ...state,
                        STOPS: {
                            selected: false,
                            id: ""
                        }
                    }
                }

            }
        };
        default:
            return state;
    }
}