import { combineReducers } from "redux";
import Counter from "./counter";
import todoReducer from "./todoReducer";
// import settingsReducer from "./setttingsReducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  counter: Counter,
});

export default rootReducer;