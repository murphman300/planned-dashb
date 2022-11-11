import {DispatchUsers} from "./types";
import {User} from "../../../models/User";

export const REPLACE_USERS = "REPLACE_USERS";
export const REPLACE_FILTERED_USERS = "REPLACE_FILTERED_USERS";
export const REMOVE_FILTER_ON_USERS = "REMOVE_FILTER_ON_USERS";
export const ADD_SAVED_USER = "ADD_SAVED_USER";
export const ADD_SAVED_USERS = "ADD_SAVED_USERS";
export const REMOVE_SAVED_USER = "REMOVE_SAVED_USER";

export const addNewUsers = (users: User[]): DispatchUsers => {
  return {type: REPLACE_USERS, payload: { users }}
}

export const addNewFilteredUsers = (users: User[]): DispatchUsers => {
  return {type: REPLACE_FILTERED_USERS, payload: { filtered_users: users, }}
}

export const removeFilterOnUsers = (): DispatchUsers => {
  return {type: REMOVE_FILTER_ON_USERS, payload: { }}
}

export const addSavedUser = (user: User): DispatchUsers => {
  return {type: ADD_SAVED_USER, payload: { saved: {[`${User.userId(user)}`]: user}}}
}

export const addSavedUsers = (users: User[]): DispatchUsers => {
  const newSavedUsersDict: {[key: string]: User} = {}
  for (let user of users) {
    newSavedUsersDict[user.email] = user;
  }
  return {type: ADD_SAVED_USERS, payload: { saved: newSavedUsersDict }}
}

export const removeSavedUser = (user: User): DispatchUsers => {
  return {type: REMOVE_SAVED_USER, payload: {remove: `${User.userId(user)}`}}
}
