import { combineReducers } from "redux";
import {filterReducer} from "./reducers/filters";
import {userReducer} from "./reducers/users";
import {uiReducer} from "./reducers/ui";

export const rootReducer = combineReducers({
  filters: filterReducer,
  users: userReducer,
  ui: uiReducer,
})
