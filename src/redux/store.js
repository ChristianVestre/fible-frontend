import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

//export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
//export default createStore(rootReducer, applyMiddleware(thunk));

///import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

//import rootReducer from './reducers'

const initialState = {

data:{
  user: {
      name: "Christian",
      ROUTES: [],
      STOPS: [],
      POIS: [],
      email: "",
  },
  //the id of the hcomponent being worked on
  selectedHtypeId: "",
  selectedComponentId: "empty",
  ROUTES: {},
  STOPS: {},
  POIS: {},
},
ui:{

  routes: {
    "h12345": {
        id: "h12345",
        headline: "Christian's Norway Route",
        subheadline: "Fjords you just have to explore",
        stops: [
            "Bergen",
            "Stavanger",
            "Molde",
            "Ålesund"
        ],
        attractions: ["Hiking", "Swimming", "Nature"]
    },
    "h54321": {
        id: "h54321",
        headline: "Paul's South Tyrol Route",
        subheadline: "Explore the Dolomites",
        stops: [
            "Bolzano",
            "Trento",
        ],
        attractions: ["Hiking", "Swimming", "Nature", "Food"]
    },
    "h12354": {
        id: "h12354",
        headline: "Simon's Allgäu Route",
        subheadline: "Experience Neuschweinstein and so much more!",
        stops: [
            "Mammendorf",
            "Füssen",
        ],
        attractions: ["Hiking", "Swimming", "Nature", "Sking"]
    },
},
stops: {
    "s213141": {
        id: "s213141",
        headline: "Bergen",
        subheadline: "Byen ombringet av fjell",
        pois: [
            "restaurant",
            "accommodation",
            "activities",
        ],
        location: { lat: 1.2222, lng: 1445666 }
    },
    "s54321": {
        id: "s54321",
        headline: "Stavanger",
        subheadline: "Oljehovedstaden",
        pois: [
            "restaurant",
            "accommodation",
            "activities",
        ],
        location: { lat: 1.5555, lng: 1.214134 }
    }
},
pois: {
    "p1314134": {
        id: "p1314134",
        headline: "Bergen Fjordrestaurant",
        subheadline: "Fantastisk fisk og sjømat!",
        location: { lat: 1.2222, lng: 1445666 },
        address: "Bryggen 15a",
        website: "www.bergen-fjordrestaurant.no"
    }
},

columns: {
    "column-1": {
        id: "column-1",
        title: "Routes",
        ids: ["h12345", "h54321", "h12354"],
    },
    "column-2": {
        id: "column-2",
        title: "Stops",
        ids: ["s213141", "s54321"],
    },
    "column-3": {
        id: "column-3",
        title: "Pois",
        ids: ["p1314134"]
    }
},
columnOrder: ["column-1", "column-2", "column-3"],
title:"Welcome Christian, here are your routes!",
inputMenu: {
    htype: "ROUTES",
    //which component is shown in the menu
    show: "MENU",
    ROUTES: [{ name: "Headline", id: "headlineInput", dispatch: "HEADLINE_INPUT" },
    { name: "Subheadline", id: "subheadlineInput", dispatch: "SUBHEADLINE_INPUT" },
    { name: "Image Gallery", id: "imageGalleryInput", dispatch: "IMAGE_GALLERY_INPUT" },
    ],
    STOPS: [{ name: "Headline", id: "headlineInput", dispatch: "HEADLINE_INPUT" },
    { name: "Subheadline", id: "subheadlineInput", dispatch: "SUBHEADLINE_INPUT" },
    { name: "Image Gallery", id: "imageGalleryInput", dispatch: "IMAGE_GALLERY_INPUT" },
    ],
    POIS: [{ name: "Headline", id: "headlineInput", dispatch: "HEADLINE_INPUT" },
    { name: "Subheadline", id: "subheadlineInput", dispatch: "SUBHEADLINE_INPUT" },
    { name: "Image Gallery", id: "imageGalleryInput", dispatch: "IMAGE_GALLERY_INPUT" },
    ]
},
simulator: {
    show: "ROUTES",
    selected: "empty"
},
selector:{
    lastManagerUiCode:"",
    selectedROUTES:"",
    selectedSTOPS:"",
    selectedPOIS:"",
    managerUiCode:"RO",
    htype:"",
}
}
}

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

//export const Store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
//export const persistor = persistStore(initialState);
export const initializeStore = (preloadedState = initialState) => {
  return createStore(
    persistedReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk))
  )
}

/*

export default () => {
  let initializeStore = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
  let persistor = persistStore(store)
  return { initializeStore, persistor }
} 

*/