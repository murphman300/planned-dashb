import {User} from "./User";
import {FilterState} from "../store/reducers/filters/types";


export enum UserSortOptions {
  fullName= "fullName",
  age="age",
}

export enum UserSortDirection {
  ascending,
  descending
}

export const userValue = (opt: UserSortOptions, user: User): number | string => {
  switch (opt) {
    case UserSortOptions.age:
      return user.age;
    case UserSortOptions.fullName:
      return User.fullName(user);
    default:
      return "";
  }
}

export const UserSortOptionStateValue = (opt: UserSortOptions, state: FilterState): UserSortDirection => {
  switch (opt) {
    case UserSortOptions.age:
      return state.sort_age ?? UserSortDirection.ascending;
    case UserSortOptions.fullName:
      return state.sort_name ?? UserSortDirection.ascending;
    default:
      return UserSortDirection.ascending;
  }
}

export const UserSortDirectionNegation = (direction: UserSortDirection | undefined) => {
  switch (direction) {
    case UserSortDirection.ascending:
      return UserSortDirection.descending;
    case UserSortDirection.descending:
      return UserSortDirection.ascending;
    default:
      return UserSortDirection.ascending;
  }
}
