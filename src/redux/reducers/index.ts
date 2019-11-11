import { combineReducers } from "redux";
import ui from "./uiReducer";
import selector from "./selectorReducer";
import data from "./dataReducer";

export default combineReducers({ ui,  selector, data});
