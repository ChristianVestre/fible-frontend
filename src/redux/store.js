import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

//export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
//export default createStore(rootReducer, applyMiddleware(thunk));


//import rootReducer from './reducers'

const initialState = {
data:{
  user: {
      name: "Christian",
      routes: [],
      stops: [],
      pois: [],
      email: "",
  },
  //the id of the hcomponent being worked on
  selectedHtypeId: "",
  selectedComponentId: "empty",
  routes: {},
  stops: {},
  pois: {},
},
ui:{

columns: {
    "routes": {
        id: "routes",
        title: "Routes",
        ids: ["h12345", "h54321", "h12354"],
    },
    "stops": {
        id: "stops",
        title: "Stops",
        ids: ["s213141", "s54321"],
    },
    "pois": {
        id: "pois",
        title: "Pois",
        ids: ["p1314134"]
    }
},
columnOrder: ["routes", "stops", "pois"],
title:"test",
inputMenu: {
    htype: "routes",
    //which component is shown in the menu
    show: "MENU",
    routes: [{ name: "Headline", id: "headlineInput", dispatch: "HEADLINE_INPUT" },
    { name: "Subheadline", id: "subheadlineInput", dispatch: "SUBHEADLINE_INPUT" },
    { name: "Image Gallery", id: "imageGalleryInput", dispatch: "IMAGE_GALLERY_INPUT" },
    ],
    stops: [{ name: "Headline", id: "headlineInput", dispatch: "HEADLINE_INPUT" },
    { name: "Subheadline", id: "subheadlineInput", dispatch: "SUBHEADLINE_INPUT" },
    { name: "Image Gallery", id: "imageGalleryInput", dispatch: "IMAGE_GALLERY_INPUT" },
    ],
    pois: [{ name: "Headline", id: "headlineInput", dispatch: "HEADLINE_INPUT" },
    { name: "Subheadline", id: "subheadlineInput", dispatch: "SUBHEADLINE_INPUT" },
    { name: "Image Gallery", id: "imageGalleryInput", dispatch: "IMAGE_GALLERY_INPUT" },
    ]
},
simulator: {
    show: "routes",
    selected: "empty"
},
selector:{
    //to keep ui state on refresh
    lastManagerUiCode:"",
    selectedROUTES:"",
    selectedSTOPS:"",
    selectedPOIS:"",
    managerUiCode:"RO",
    htype:"",
}
}
}


//const persistedReducer = persistReducer(persistConfig, rootReducer)
export const initializeStore = (preloadedState = initialState) => {
let store;
const isClient = typeof window !== 'undefined';
if (isClient) {
  store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk))
  );
   //store.__PERSISTOR = persistStore(store);
} else {
    store = createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(applyMiddleware(thunk))
      );
    }
//export const Store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
//export const persistor = persistStore(initialState);

  return store
}

/*

export default () => {
  let initializeStore = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
  let persistor = persistStore(store)
  return { initializeStore, persistor }
} 

*/