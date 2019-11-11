import { REMOVE_ROUTE, UPDATE_ROUTE_STATE, UPDATE_SELECTOR_MANAGER_STATE, 
    UPDATE_INPUT_SCREEN_UI, INITIALIZE_INPUT_SCREEN_UI, 
    UPDATE_SIMULATOR_SELECTION
  } from "./types";
  //includes route management actions


  let routeId = 0;
  let updateId = 0;
  let updateManagerStateId = 0;
  let updateInputScreenUiId = 0;
  let initializeInputScreenUiId = 0;
  let updateSimulatorSelectionId = 0;


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