import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import storageSession from 'redux-persist/lib/storage/session';
import {persistReducer, persistStore} from 'redux-persist';

//export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
//export default createStore(rootReducer, applyMiddleware(thunk));


//import rootReducer from './reducers'

const initialState = {
  data: {
    user:{
      name: "",
      routes: [],
      stops: [],
      pois: [],
      email: "",
  },
  selectedHtypeId: "",
  selectedComponentId: "empty",
  selectedHtype:"",
  routes:{},
  pois:{},
  stops:{},
  components: {},
  },
  ui: {
    routeMgmt: {
      selector: {
        lastManagerUiCode: "",
        selectedroutes: "",
        selectedstops: "",
        selectedpois: "",
        managerUiCode: "RO",
        htype: "",
      },
      columnOrder: ["column-1", "column-2", "column-3"],
      title: "",
    },
    inputScreen: {
      inputMenu: {
        htype: "routes",
        //which component is shown in the menu
        show: "MENU",
        routes: [{ name: "Headline", id: "headlineInput", dispatch: "HEADLINE_INPUT", type:"HEADLINE" },
        { name: "Subheadline", id: "subheadlineInput", dispatch: "SUBHEADLINE_INPUT", type:"SUBHEADLINE" },
        { name: "Image Gallery", id: "imageGalleryInput", dispatch: "IMAGE_GALLERY_INPUT", type:"IMAGE_GALLERY" },
        ],
        stops: [{ name: "Headline", id: "headlineInput", dispatch: "HEADLINE_INPUT", type:"HEADLINE" },
        { name: "Subheadline", id: "subheadlineInput", dispatch: "SUBHEADLINE_INPUT",type:"SUBHEADLINE" },
        { name: "Image Gallery", id: "imageGalleryInput", dispatch: "IMAGE_GALLERY_INPUT",type:"IMAGE_GALLERY"  },
        ],
        pois: [{ name: "Headline", id: "headlineInput", dispatch: "HEADLINE_INPUT", type:"HEADLINE" },
        { name: "Subheadline", id: "subheadlineInput", dispatch: "SUBHEADLINE_INPUT", type:"SUBHEADLINE" },
        { name: "Image Gallery", id: "imageGalleryInput", dispatch: "IMAGE_GALLERY_INPUT",type:"IMAGE_GALLERY"},
        ]
      },
      simulator: {
        show: "routes",
        selected: "empty"
      },
    }

  }
}


const persistedReducer = persistReducer({key:"root", storage:storageSession}, rootReducer)
/*
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
  }*/
 // export const Store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
  //export const persistor = persistStore(initialState);

//  return store
//}
 export const Store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(Store);
/*
export default () => {
  let initializeStore = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
  let persistor = persistStore(store)
  return { initializeStore, persistor }
} 
*/