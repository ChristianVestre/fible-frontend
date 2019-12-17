import { combineReducers } from "redux";
import ui from "./uiReducer";
import data from "./dataReducer";

export default combineReducers({ data,ui});
