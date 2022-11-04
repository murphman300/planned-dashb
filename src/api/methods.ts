import {fetchFromUrl, NetworkResponse} from "../utils/network";
import {User} from "../models/User";

const {
  REACT_APP_API_URL
} = process.env

export const getAdults = async (): Promise<NetworkResponse<User[]>> => {
  return await fetchFromUrl<User[]>(`${REACT_APP_API_URL}/users/adults`)
}

export const getKids = async (): Promise<NetworkResponse<User[]>> => {
  return await fetchFromUrl<User[]>(`${REACT_APP_API_URL}/users/kids`)
}


export const getSeniors = async (): Promise<NetworkResponse<User[]>> => {
  return await fetchFromUrl<User[]>(`${REACT_APP_API_URL}/users/seniors`)
}
