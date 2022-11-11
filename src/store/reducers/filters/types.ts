import {UserSortDirection, UserSortOptions} from "../../../models/UserUtilTypes";

export interface FilterState {
  minAgeFilter: 0,
  maxAgeFilter: 100,
  textFilter: undefined,
  sort_age: UserSortDirection | undefined,
  sort_name: UserSortDirection | undefined,
  filtered: false,

}

export type DispatchFilter = {
  type: string | UserSortOptions;
  payload?: string | number | undefined | boolean
}
