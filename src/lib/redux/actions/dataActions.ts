import { 
  DATA_LOAD_USER,
  DATA_LOAD_ROUTE_MGMT_DATA,
  DATA_LOAD_INPUT_SCREEN,
  DATA_UPDATE_COMPONENTS_ORDER,
  DATA_UPDATE_HTYPE_ORDER,
  DATA_UPDATE_CHILD_HTYPE_ORDER,
  DATA_UPDATE_COMPONENT,
  DATA_ADD_NEW_COMPONENT,
  DATA_EMPTY_SELECTED_COMPONENT_ID,
  DATA_HANDLE_HTYPE_CHANGE,
  DATA_SET_SELECTED_COMPONENT,
  DATA_LOAD_COMPONENTS,
  DATA_SET_SELECTED_HTYPE,
  DATA_DELETE_SELECTED_COMPONENT
} from "./types";



let dataLoadUserId = 0;
let dataLoadRouteMgmtDataId = 0;
let dataLoadInputScreenId = 0;
let dataLoadComponentsId = 0;
let dataUpdateComponentsOrderId = 0;
let dataUpdateHtypeOrderId = 0;
let dataUpdateChildHtypeOrderId = 0;
let dataUpdateComponentId = 0;
let dataAddNewComponentId = 0;
let dataEmptySelectedComponentId = 0;
let dataHandleHtypeNameChangeId = 0;
let dataSetSelectedComponentId = 0;
let dataSetSelectedHtypeId = 0;
let dataDeleteSelectedComponentId = 0;


export const dataLoadUser = content => ({
  type: DATA_LOAD_USER,
  payload: {
    id: ++dataLoadUserId,
    content,
  }
});


export const dataLoadRouteMgmtData = content => ({
  type: DATA_LOAD_ROUTE_MGMT_DATA,
  payload: {
    id: ++dataLoadRouteMgmtDataId,
    content,
  }
});

export const dataLoadInputScreen = content => ({
  type: DATA_LOAD_INPUT_SCREEN,
  payload:{
    id: ++dataLoadInputScreenId,
    content,
  }
})

export const dataUpdateComponentsOrder = content => ({
  type: DATA_UPDATE_COMPONENTS_ORDER,
  payload:{
    id: ++dataUpdateComponentsOrderId,
    content,
  }
})

export const dataUpdateHtypeOrder = content => ({
  type: DATA_UPDATE_HTYPE_ORDER,
  payload:{
    id: ++dataUpdateHtypeOrderId,
    content,
  }
})

export const dataUpdateChildHtypeOrder = content => ({
  type:DATA_UPDATE_CHILD_HTYPE_ORDER,
  payload:{
    id: ++dataUpdateChildHtypeOrderId,
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
export const dataEmptySelectedComponent = () => ({
  type: DATA_EMPTY_SELECTED_COMPONENT_ID,
  payload:{
    id:++dataEmptySelectedComponentId,
  }
})

export const dataHandleHtypeChange = content => ({
  type: DATA_HANDLE_HTYPE_CHANGE,
  payload: {
    id:++dataHandleHtypeNameChangeId,
    content,
  }
})

export const dataSetSelectedComponent = content => ({
  type: DATA_SET_SELECTED_COMPONENT,
  payload:{
    id:++dataSetSelectedComponentId,
    content,
  }
})

export const dataSetSelectedHtype = content => ({
  type: DATA_SET_SELECTED_HTYPE,
  payload:{
    id:++dataSetSelectedHtypeId,
    content,
  }
})

export const dataLoadComponents = content => ({
  type: DATA_LOAD_COMPONENTS,
  payload:{
    id:++dataLoadComponentsId,
    content,
  }
})

export const dataDeleteSelectedComponent = () => ({
  type: DATA_DELETE_SELECTED_COMPONENT,
  payload:{
    id:++dataDeleteSelectedComponentId,
  }
})