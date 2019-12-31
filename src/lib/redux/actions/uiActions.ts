import { 
    UI_UPDATE_ROUTE_STATE,
    UI_UPDATE_SELECTOR_MANAGER_STATE, 
    UI_INITIALIZE_INPUT_SCREEN_UI, 
    UI_STOP_AND_POI_MANAGER_CONTROLLER,
    UI_SET_TITLE,
    UI_INITIALIZE_SIMULATOR_STATE,
    //---------------
    UI_UPDATE_ROUTEMGMT_STATE,
    UI_LOAD_STOP_AND_POI_MANAGER_STATE,
    UI_UPDATE_INPUT_SCREEN_STATE,
    UI_UPDATE_SIMULATOR_SELECTION_STATE,
    UI_UPDATE_INPUT_SCREEN_FLAG
    

  } from "./types";
  //includes route management actions


  let uiUpdateId = 0;
  let uiUpdateManagerStateId = 0;
  let uiUpdateInputScreenStateId = 0;
  let uiInitializeInputScreenUiId = 0;
  let uiUpdateSimulatorSelectionId = 0;
  let uiStopAndPoiManagerControllerId = 0;
  let uiSetTitleId = 0;
  let uiUpdateRoutemgmtStateId = 0;
  let uiLoadStopAndPoiManagerStateId = 0;
  let uiUpdateSimulatorSelectionStateId = 0;
  let uiInitializeSimulatorStateId = 0;
  let uiUpdateInputScreenFlagId = 0;


  export const uiUpdateOrder = content => ({
      type: UI_UPDATE_ROUTE_STATE,
      payload: {
        id: ++uiUpdateId,
        content,
      }
    });
  
  export const uiUpdateSelectorManagerState = content => ({
      type: UI_UPDATE_SELECTOR_MANAGER_STATE,
      payload: {
        id:++uiUpdateManagerStateId,
        content,
      }
  })
  
  
  
  export const uiInitializeInputScreenUi = content => ({
    type: UI_INITIALIZE_INPUT_SCREEN_UI,
    payload: {
      id:++uiInitializeInputScreenUiId,
      content,
    }
    
  })



  export const uiStopAndPoiManagerController = content => ({
    type: UI_STOP_AND_POI_MANAGER_CONTROLLER,
    payload: {
      id:++uiStopAndPoiManagerControllerId,
      content,
    }
  })

  export const uiSetTitle = content => ({
    type: UI_SET_TITLE,
    payload: {
      id:++uiSetTitleId,
      content,
    }
  })

  ///-.--------------
  export const uiUpdateRoutemgmtState = content => ({
    type: UI_UPDATE_ROUTEMGMT_STATE,
    payload: {
      id:++uiUpdateRoutemgmtStateId,
      content,
    }
  })

  export const uiLoadStopAndPoiManagerState = content => ({
    type: UI_LOAD_STOP_AND_POI_MANAGER_STATE,
    payload: {
      id:++uiLoadStopAndPoiManagerStateId,
      content,
    }
  })

  export const uiUpdateInputScreenState = content => ({
    type: UI_UPDATE_INPUT_SCREEN_STATE,
    payload: {
      id:++uiUpdateInputScreenStateId,
      content,
    }
  })


  export const uiUpdateSimulatorSelectionState = content => ({
    type: UI_UPDATE_SIMULATOR_SELECTION_STATE,
    payload: {
      id:++uiUpdateSimulatorSelectionStateId,
      content,
    }
  })

  export const uiInitializeSimulatorState = content => ({
    type:UI_INITIALIZE_SIMULATOR_STATE,
    payload:{
      id:++uiInitializeSimulatorStateId,
      content,
    }
  })

  export const uiUpdateInputScreenFlag = () => ({
    type:UI_UPDATE_INPUT_SCREEN_FLAG,
    payload:{
      id:++uiUpdateInputScreenFlagId
    }
  })