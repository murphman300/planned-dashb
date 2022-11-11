import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {FilterState} from "../store/reducers/filters/types";
import {
  applyMaxAgeFilter,
  applyMinAgeFilter, applyTextFilter,
} from "../store/reducers/filters/actions";
import {addNewUsers, addSavedUsers, removeFilterOnUsers} from "../store/reducers/users/actions";
import {Users} from "../models/UserUtils";
import {getAllUsers} from "../api";
import {ListDisplayComponent} from "./ListDisplayComponent";
import {BorderedContainer} from "./BorderedContainer";
import {PlannedCTAButton} from "./PlannedCTAButton";
import {FilterInputFieldDiv, FilterInputFieldLabel} from "../themes/components";
import {UserState} from "../store/reducers/users/types";
import {localStorageList, useLocalStorage} from "../utils/local";
import {PLANNED_LOCAL_STORAGE_KEY} from "../utils/variables";

const MIN_FILTER_FIELD = 'MIN_FILTER_FIELD';
const MAX_FILTER_FIELD = 'MAX_FILTER_FIELD';

const FiltersBoxComponent = () => {

  const users = useSelector((state: {users: UserState}) => state.users.users)
  const minAge = useSelector((state: {filters: FilterState}) => state.filters.minAgeFilter)
  const maxAge = useSelector((state: {filters: FilterState}) => state.filters.maxAgeFilter)
  const filtered = useSelector((state: {filters: FilterState}) => state.filters.filtered)

  const [storage, setStorage] = useLocalStorage(PLANNED_LOCAL_STORAGE_KEY, {});

  const dispatch = useDispatch()

  const handleRetrieve = () => {
    getAllUsers()
      .then(users => {
        dispatch(removeFilterOnUsers())
        dispatch(applyTextFilter(undefined))
        const storageUsersList = localStorageList(storage);
        const minMaxFilteredUsers = Users.ageFilter(users, minAge, maxAge)
        const usersList = [...minMaxFilteredUsers, ...storageUsersList].filter(e => e !== undefined);
        dispatch(addSavedUsers(storageUsersList))
        dispatch(addNewUsers(Users.sort(usersList)))
      })
      .catch(console.error)
  }

  /**
   * we load the table on page load only if users have never been fetched before
   */
  useEffect(() => {
    if (users.length < 1 && !filtered) {
      handleRetrieve();
    }
  }, [users])

  const handleInputChange = (field: string, value: number) => {
    switch (field) {
      case MAX_FILTER_FIELD:
        dispatch(applyMaxAgeFilter(value))
        break
      case MIN_FILTER_FIELD:
        dispatch(applyMinAgeFilter(value))
        break;
    }
  }

  return (
    <ListDisplayComponent>
      <BorderedContainer style={{width: '100%'}}>
        <FilterInputFieldLabel>Min</FilterInputFieldLabel>
        <FilterInputFieldDiv
          name={"minAge"}
          value={minAge}
          onChange={(e)=>handleInputChange(MIN_FILTER_FIELD, Number(e.target.value.replace(/\D/,'')))}
          type={'tel'}
        />
      </BorderedContainer>
      <BorderedContainer style={{width: '100%'}}>
        <FilterInputFieldLabel>Max</FilterInputFieldLabel>
        <FilterInputFieldDiv
          name={"maxAge"}
          value={maxAge}
          onChange={(e)=>handleInputChange(MAX_FILTER_FIELD, Number(e.target.value.replace(/\D/,'')))}
          type={'tel'}
        />
      </BorderedContainer>
      <PlannedCTAButton buttonText={"Retrieve Users"} onClick={handleRetrieve}/>
    </ListDisplayComponent>
  );
}

export default FiltersBoxComponent;
