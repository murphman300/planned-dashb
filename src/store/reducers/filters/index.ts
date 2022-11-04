import {
  APPLY_MAX_AGE_FILTER, APPLY_MIN_AGE_FILTER, CHANGE_TEXT_FILTER,
} from "./actions";
import {DispatchFilter, FilterState} from "./types";
import {UserSortOptions} from "../../../models/UserUtilTypes";

const initialState: FilterState = {
  minAgeFilter: 0,
  maxAgeFilter: 100,
  textFilter: undefined,
  filtered: false,
  sort_age: undefined,
  sort_name: undefined,
}

export const filterReducer = function (state = initialState, action: DispatchFilter) {
  switch (action.type) {
    case APPLY_MAX_AGE_FILTER:
      return {
        ...state,
        maxAgeFilter: Number(action.payload ?? 0),
      }
    case APPLY_MIN_AGE_FILTER:
      return {
        ...state,
        minAgeFilter: Number(action.payload ?? 0)
      }
    case UserSortOptions.fullName:
      return {
        ...state,
        sort_name: action.payload,
        sort_age: undefined,
        filtered: true,
      }
    case UserSortOptions.age:
      return {
        ...state,
        sort_age: action.payload,
        sort_name: undefined,
        filtered: true,
      }
    case CHANGE_TEXT_FILTER:
      const emptyFilter = action.payload === undefined || action.payload === ''
      return {
        ...state,
        textFilter: emptyFilter ? undefined : action.payload,
        filtered: !(emptyFilter),
      }
    default:
      return state;
  }
};
