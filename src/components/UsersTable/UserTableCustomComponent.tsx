import {useDispatch, useSelector} from "react-redux";
import {UserState} from "../../store/reducers/users/types";
import {FilterState} from "../../store/reducers/filters/types";
import {addNewFilteredUsers} from "../../store/reducers/users/actions";
import {Users} from "../../models/UserUtils";
import React, {useEffect} from "react";
import {UserTableDivs} from "../../themes/components";
import {UserRowCustom} from "./UserRowCustom";
import {EmptyUserListComponent} from "./EmptyUserListComponent";
import {UserSortOptions} from "../../models/UserUtilTypes";
import {useLocalStorage} from "../../utils/local";
import {PLANNED_LOCAL_STORAGE_KEY} from "../../utils/variables";

export const UserTableCustomComponent = () => {

  const dispatch = useDispatch()
  const users = useSelector((state: {users: UserState}) => state.users.users)
  const filtered_users = useSelector((state: {users: UserState}) => state.users.filtered_users)
  const saved = useSelector((state: {users: UserState}) => state.users.saved)
  const textFilter = useSelector((state: {filters: FilterState}) => state.filters.textFilter)
  const filtered = useSelector((state: {filters: FilterState}) => state.filters.filtered)
  const sort_age = useSelector((state: {filters: FilterState}) => state.filters.sort_age)
  const sort_name = useSelector((state: {filters: FilterState}) => state.filters.sort_name)

  const [name, setStorage] = useLocalStorage(PLANNED_LOCAL_STORAGE_KEY, {});

  const handleUpdatingFilteredUsersOnTextFilterChange = () => {
    dispatch(addNewFilteredUsers(Users.textFilter(users, textFilter)))
  }

  useEffect(handleUpdatingFilteredUsersOnTextFilterChange, [users, textFilter])


  useEffect(() => {
    const content = filtered_users.length > 0 ? filtered_users : users;
    if (sort_age !== undefined && sort_name === undefined) {
      dispatch(addNewFilteredUsers(Users.sortBy(content, UserSortOptions.age, sort_age)))
    } else if (sort_age === undefined && sort_name !== undefined) {
      dispatch(addNewFilteredUsers(Users.sortBy(content, UserSortOptions.fullName, sort_name)))
    }
  }, [sort_age, sort_name, filtered_users, users])

  useEffect(() => {
    setStorage({...saved});
  }, [saved])

  if (users.length === 0)
    return(
      <EmptyUserListComponent label={'Please start by fetching some users with the Retrieve Users button'}/>
    )

  if (filtered && filtered_users.length === 0)
    return(
      <EmptyUserListComponent label={'No users match that query!'}/>
    )

  return(
    <UserTableDivs.table>
      <UserTableDivs.body>
        {React.Children.toArray((!filtered ? users : filtered_users).map((user, index) => user ? <UserRowCustom user={user} index={index} length={users.length}/> : null ))}
      </UserTableDivs.body>
    </UserTableDivs.table>
  )
}
