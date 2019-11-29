import { HEADLINE,
  INITIALIZE_HTYPE,
  DELETE_HTYPE,
  EMPTY_SELECTED_COMPONENT_ID,
  SET_SELECTED_COMPONENT,
  UPDATE_COMPONENTS_ORDER,
  CLEAN_NONSAVED_HTYPES,
  LOAD_USER,
  CLEAN_USER,

} from "./types";


let addHeadlineId = 0;
let initializeHtypeId = 0;
let deleteHtypeId = 0;
let emptySelectedComponentId = 0;
let setSelectedComponentId = 0;
let updateComponentsOrderId = 0;
let cleanNonsavedHtypesId = 0;
let loadUserId = 0;
let cleanUserId = 0;



export const addOrUpdateHeadline = content => ({
  type: HEADLINE,
  payload: {
    id:++addHeadlineId,
    content,
  }
})

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

export const cleanUser = () => ({
  type: CLEAN_USER,
  payload:{
    id:++cleanUserId
  }
})