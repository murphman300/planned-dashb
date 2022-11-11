import {
  ADD_SAVED_USER, ADD_SAVED_USERS,
  REMOVE_FILTER_ON_USERS,
  REMOVE_SAVED_USER,
  REPLACE_FILTERED_USERS,
  REPLACE_USERS
} from "./actions";
import {DispatchUsers, UserState} from "./types";


const initialState: UserState = {
  users: [],
  saved: {},
  filtered: false,
  filtered_users: []
}

export const userReducer = function (state = initialState, action: DispatchUsers) {
  switch (action.type) {
    case REPLACE_USERS:
      return {
        ...state,
        ...action.payload,
      };
    case REPLACE_FILTERED_USERS:
      return {
        ...state,
        ...action.payload,
        filtered: true,
      }
    case REMOVE_FILTER_ON_USERS:
      return {
        ...state,
        ...action.payload,
        filtered: false,
      }
    case ADD_SAVED_USER:
      return {
        ...state,
        saved: {
          ...state.saved,
          ...action.payload.saved,
        },
      }
    case ADD_SAVED_USERS:
      return {
        ...state,
        saved: {
          ...state.saved,
          ...action.payload.saved,
        },
      }
    case REMOVE_SAVED_USER:
      if (!action.payload.remove || !state.saved[action.payload.remove]) return {...state};
      const { [action.payload.remove]: value, ...newSaved} = state.saved;
      return {
        ...state,
        saved: {
          ...newSaved,
        },
      }
    default:
      return state;
  }
};
