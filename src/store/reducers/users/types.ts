import {User} from "../../../models/User";

export interface UserState {
  users: User[]
  saved: { [key: string]: User}
  filtered: boolean
  filtered_users: User[]
}

export interface UserStateDispatchPayload {
  users?: User[]
  filtered?: boolean
  filtered_users?: User[],
  saved?: { [key: string]: User}
  remove?: string
}

export type DispatchUsers = {
  type: string;
  payload: UserStateDispatchPayload
}
