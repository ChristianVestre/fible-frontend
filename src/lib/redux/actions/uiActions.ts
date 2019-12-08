import { REMOVE_ROUTE, UPDATE_ROUTE_STATE, UPDATE_SELECTOR_MANAGER_STATE, 
    UPDATE_INPUT_SCREEN_UI, INITIALIZE_INPUT_SCREEN_UI, 
    UPDATE_SIMULATOR_SELECTION,
    STOP_AND_POI_MANAGER_CONTROLLER,
    SET_TITLE,
  } from "./types";
  //includes route management actions


  let routeId = 0;
  let updateId = 0;
  let updateManagerStateId = 0;
  let updateInputScreenUiId = 0;
  let initializeInputScreenUiId = 0;
  let updateSimulatorSelectionId = 0;
  let stopAndPoiManagerControllerId = 0;
  let setTitleId = 0;


  export const removeRoute = content => ({
    type: REMOVE_ROUTE,
    payload: {
      id: ++routeId,
      content,
    }
  });
  
  export const updateOrder = content => ({
      type: UPDATE_ROUTE_STATE,
      payload: {
        id: ++updateId,
        content,
      }
    });
  
  export const updateSelectorManagerState = content => ({
      type: UPDATE_SELECTOR_MANAGER_STATE,
      payload: {
        id:++updateManagerStateId,
        content,
      }
   })
  
   export const updateInputScreenUi = content => ({
    type: UPDATE_INPUT_SCREEN_UI,
    payload: {
      id:++updateInputScreenUiId,
      content,
    }
  })
  
  export const initializeInputScreenUi = content => ({
    type: INITIALIZE_INPUT_SCREEN_UI,
    payload: {
      id:++initializeInputScreenUiId,
      content,
    }
    
  })

  export const updateSimulatorSelection = content => ({
    type: UPDATE_SIMULATOR_SELECTION,
    payload: {
      id:++updateSimulatorSelectionId,
      content,
    }
    
  })

  export const stopAndPoiManagerController = content => ({
    type: STOP_AND_POI_MANAGER_CONTROLLER,
    payload: {
      id:++stopAndPoiManagerControllerId,
      content,
    }
  })

  export const setTitle = content => ({
    type: SET_TITLE,
    payload: {
      id:++setTitleId,
      content,
    }
  })