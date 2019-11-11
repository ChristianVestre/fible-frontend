import { HEADLINE,
  INITIALIZE_HTYPE,
  DELETE_HTYPE,
  EMPTY_SELECTED_COMPONENT_ID,
  SET_SELECTED_COMPONENT,
  UPDATE_COMPONENTS_ORDER,



} from "./types";


let addHeadlineId = 0;
let initializeHtypeId = 0;
let deleteHtypeId = 0;
let emptySelectedComponentId = 0;
let setSelectedComponentId = 0;
let updateComponentsOrderId = 0;



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