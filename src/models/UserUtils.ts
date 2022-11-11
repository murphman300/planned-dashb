import {User} from "./User";
import {UserSortDirection, UserSortOptions, userValue} from "./UserUtilTypes";

// @ts-ignore
import faker from 'faker';

/**
 * Deep compares two users given a value and a type of comparison for sorting them in
 * ascending or descending order
 *
 * @param dir {UserSortDirection}
 * @param opt {UserSortOptions}
 * @param a {User}
 * @param b {User}
 */
export const compareUsers = (dir: UserSortDirection, opt: UserSortOptions, a: User, b: User): number => {
  const valueA = userValue(opt, a)
  const valueB = userValue(opt, b)
  let comparison;
  switch (opt) {
    case UserSortOptions.age:
      comparison = (valueA as number) > (valueB as number);
      switch (dir) {
        case UserSortDirection.descending:
          return comparison ? 1 : -1;
        case UserSortDirection.ascending:
          return comparison ? -1 : 1;
        default:
          return 0;
      }
    case UserSortOptions.fullName:
      comparison = (valueA as string).localeCompare(valueB as string);
      switch (dir) {
        case UserSortDirection.descending:
          return comparison > 0 ? 1 : -1;
        case UserSortDirection.ascending:
          return comparison < 0 ? 1 : -1;
        default:
          return 0;
      }
    default:
      return 0;
  }
}

/**
 * Convenience class to house static methods meant to manipulate
 * user lists
 */
export class Users {

  /**
   * Sorts a list of Users by full name ascending
   * or by age descending if full names are the same
   * @param users
   */
  static sort(users: User[]): User[] {
    return users.sort((a, b) => {
      if (User.fullName(a) !== User.fullName(b)) {
        return User.fullName(a).localeCompare(User.fullName(b))
      }
      if (a.age === b.age) return 0;
      return a.age > b.age ? -1 : 1;
    })
  }

  /**
   * Sort a list of users by deep comparing on a field
   *
   * @param users {User[]} the list of User objects
   * @param on {UserSortOptions} the field to sort on
   * @param inOrder {UserSortDirection} the order by which to sort
   */
  static sortBy(users: User[], on: UserSortOptions, inOrder: UserSortDirection): User[] {
    return users.sort((a, b) => compareUsers(inOrder, on, a, b))
  }

  /**
   * Filter out users from a list of User objects who are contained between a range, inclusively
   *
   * @param users {User[]} the list of User objects
   * @param min {number} minimum of the range
   * @param max {number} maximum of the range
   */
  static ageFilter(users: User[], min: number, max: number): User[]  {
    return users.filter((user) => !!user && min <= user.age && user.age <= max)
  }

  /**
   * Filter out users from a list of User objects which contain a string
   *
   * Compares a concatenation of all values of the User object, and
   * checks if this resulting string contains the query as a substring
   *
   * @param users
   * @param filter
   */
  static textFilter(usersList: User[], filter?: string | undefined): User[] {
    if (filter === undefined || '') return usersList;

    return usersList.filter((user) => [
      User.fullName(user),
      user.email ?? '',
      user.country ?? '',
      `${user.age ?? ''}`
    ].join('').indexOf(filter) > -1);
  }

  static filterUserByThoseSaved(usersList: User[], filtered_save: UserSortDirection | undefined, saved_users: {[key: string]: User}): User[] {
    if (Object.keys(saved_users).length < 1) {
      return usersList;
    }
    const topList: User[] = [];
    const bottomList: User[] = [];

    for (let user of usersList) {
      (saved_users[User.userId(user)] === undefined ? bottomList : topList).push(user);
    }
    switch(filtered_save) {
      case UserSortDirection.descending:
        return [
          ...topList.sort((a, b) => compareUsers(filtered_save, UserSortOptions.fullName, a, b)),
          ...bottomList.sort((a, b) => compareUsers(filtered_save, UserSortOptions.fullName, a, b))
        ]
      case UserSortDirection.ascending:
        return [
          ...bottomList.sort((a, b) => compareUsers(filtered_save, UserSortOptions.fullName, a, b)),
          ...topList.sort((a, b) => compareUsers(filtered_save, UserSortOptions.fullName, a, b)),
        ]
      default:
        return [...topList, ...bottomList]
    }
  }

}
