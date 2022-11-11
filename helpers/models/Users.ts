import {User, UserProperties} from "../../src/models/User";


export const createUser = (options: UserProperties) => {
  // @ts-ignore
  return new User({
    // @ts-ignore
    age: "",
    // @ts-ignore
    country: "",
    // @ts-ignore
    email: "",
    // @ts-ignore
    name: {
      firstName: '',
      lastName: ''
    },
    ...(options ?? {})
  });
}
