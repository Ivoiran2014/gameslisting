// Load the other reducer and regroup them
import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";
import loadDetailReducer from './detailReducer';

const rootReducer = combineReducers({
  gamesReducer: gamesReducer,
  detailReducer:loadDetailReducer
});

export default rootReducer;
