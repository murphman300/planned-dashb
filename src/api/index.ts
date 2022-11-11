/**
 * adults, kids, seniors
 */
import {NetworkResponse} from "../utils/network";
import {User} from "../models/User";
import {Users} from "../models/UserUtils";
import {getAdults, getKids, getSeniors} from "./methods";


export const getAllUsers = async (): Promise<User[]> => {
  const responses: NetworkResponse<User[]>[] = await Promise.all(
    [
      getAdults(),
      getKids(),
      getSeniors()
    ]
  )

  return Users.sort(
    responses.map(response => response.data).flat()
  );
}
