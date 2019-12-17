import { HEADLINE,
  INITIALIZE_HTYPE,
  DELETE_HTYPE,
  EMPTY_SELECTED_COMPONENT_ID,
  SET_SELECTED_COMPONENT,
  UPDATE_COMPONENTS_ORDER,
  CLEAN_NONSAVED_HTYPES,
  LOAD_USER,
  CLEAN_USER,
  LOAD_HTYPE_DATA,
  INITIALIZE_INPUTSCREEN,

  INITIALIZE_INPUTSCREEN_DATA,
  LOAD_ROUTEMGMT_DATA,
  LOAD_INPUTSCREEN_DATA,
  UPDATE_STOP_AND_POI_DATA,
  DATA_ADD_NEW_COMPONENT,
  DATA_UPDATE_COMPONENT,

} from "./types";


let headlineId = 0;
let initializeHtypeId = 0;
let deleteHtypeId = 0;
let emptySelectedComponentId = 0;
let setSelectedComponentId = 0;
let updateComponentsOrderId = 0;
let cleanNonsavedHtypesId = 0;
let loadUserId = 0;
let cleanUserId = 0;
let loadHtypeDataId = 0;
let initializeInputscreenId = 0;
//----
let initializeInputScreenDataId = 0;
let loadRouteMgmtDataId = 0;
let loadInputScreenDataId = 0;
let updateStopAndPoiDataId = 0;
let dataUpdateComponentId =0;
let dataAddNewComponentId = 0;






export const initializeHtype = content => ({
  type: INITIALIZE_HTYPE,
  payload: {
    id:++initializeHtypeId,
    content,
  }
})

export const deleteHtype = content => ({
  type: DELETE_HTYPE,
  payload: {
    id:++deleteHtypeId,
    content,
  }
})

export const emptySelectedComponent = content => ({
  type: EMPTY_SELECTED_COMPONENT_ID,
  payload:{
    id:++emptySelectedComponentId,
  }
})

export const setSelectedComponent = content => ({
  type: SET_SELECTED_COMPONENT,
  payload:{
    id:++setSelectedComponentId,
    content
  }
})

export const updateComponentsOrder = content => ({
  type: UPDATE_COMPONENTS_ORDER,
  payload:{
    id:++updateComponentsOrderId,
    content
  }
})

export const cleanNonsavedHtypes = () => ({
  type: CLEAN_NONSAVED_HTYPES,
  payload:{
    id:++cleanNonsavedHtypesId,
  }
})

export const loadUser = content => ({
  type: LOAD_USER,
  payload:{
    id:++loadUserId,
    content,
  }
})

export const loadHtypeData = content => ({
  type: LOAD_HTYPE_DATA,
  payload:{
    id:++loadHtypeDataId,
    content,
  }
})

export const loadComponents = content => ({

})

export const cleanUser = () => ({
  type: CLEAN_USER,
  payload:{
    id:++cleanUserId
  }
})

export const initializeInputScreen = content => ({
  type: INITIALIZE_INPUTSCREEN,
  payload:{
    id:++initializeInputscreenId,
    content
  }
})

//.....







export const initializeInputScreenData = content => ({
  type: INITIALIZE_INPUTSCREEN_DATA,
  payload:{
    id:++initializeInputScreenDataId,
    content
  }
})

export const loadRouteMgmtData = content => ({
  type: LOAD_ROUTEMGMT_DATA,
  payload:{
    id:++loadRouteMgmtDataId,
    content
  }
})

export const loadInputScreenData = content => ({
  type: LOAD_INPUTSCREEN_DATA,
  payload:{
    id:++loadInputScreenDataId,
    content
  }
})

export const updateStopAndPoiData = content => ({
  type: UPDATE_STOP_AND_POI_DATA,
  payload:{
    id:++updateStopAndPoiDataId,
    content
  }
})
export const addOrUpdateHeadline = content => ({
  type: HEADLINE,
  payload: {
    id:++headlineId,
    content,
  }
})

export const dataUpdateComponent = content => ({
  type: DATA_UPDATE_COMPONENT,
  payload: {
    id:++dataUpdateComponentId,
    content,
  }
})

export const dataAddNewComponent = content => ({
  type: DATA_ADD_NEW_COMPONENT,
  payload: {
    id:++dataAddNewComponentId,
    content,
  }
})

