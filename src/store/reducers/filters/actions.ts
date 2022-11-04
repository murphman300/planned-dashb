import {DispatchFilter} from "./types";
import {UserSortDirection, UserSortOptions} from "../../../models/UserUtilTypes";
export const APPLY_MIN_AGE_FILTER = "APPLY_MIN_AGE_FILTER";
export const APPLY_MAX_AGE_FILTER = "APPLY_MAX_AGE_FILTER";
export const CHANGE_TEXT_FILTER = "CHANGE_TEXT_FILTER";


export const applyMinAgeFilter = (value: string | number | undefined ): DispatchFilter => {
  return { type: APPLY_MIN_AGE_FILTER, payload: value }
}

export const applyMaxAgeFilter = (value: string | number | undefined ): DispatchFilter => {
  return { type: APPLY_MAX_AGE_FILTER, payload: value  }
}

export const applyTextFilter = (value: string | undefined): DispatchFilter => {
  return { type: CHANGE_TEXT_FILTER, payload: value  }
}

export const applySortAge = (value: UserSortDirection): DispatchFilter => {
  return { type: UserSortOptions.age, payload: value  }
}

export const applySortName = (value: UserSortDirection): DispatchFilter => {
  return { type: UserSortOptions.fullName, payload: value  }
}


