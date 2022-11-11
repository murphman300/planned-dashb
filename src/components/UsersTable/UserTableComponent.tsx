import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {UserState} from "../../store/reducers/users/types";
import {
  UserTableStylings
} from "../../themes/theme";
import {BorderedContainer} from "../BorderedContainer";
import {MagGlass} from "../../icons/mag-glass";
import {FilterState} from "../../store/reducers/filters/types";
import {applyTextFilter} from "../../store/reducers/filters/actions";
import {inputBorderColor} from "../../themes/variables";
import {
  FilterInputFieldDiv,
  UserTableContainerDiv,
  UserTableFilterContainerDiv,
  UserTableDivs, FilterInputFieldFullWidthDiv,
} from "../../themes/components";
import {UserHeaderCustom} from "./UserHeaderCustom";
import {UserTableCustomComponent} from "./UserTableCustomComponent";

type UserTableProps = {
  children: JSX.Element | JSX.Element[],
};

const UserTableContainer = ({children}: UserTableProps) => {
  return(
    <UserTableContainerDiv>
      {React.Children.toArray(children)}
    </UserTableContainerDiv>
  )
}

const UserTableComponent = () => {

  const dispatch = useDispatch()
  const users = useSelector((state: {users: UserState}) => state.users.users)
  const filtered_users = useSelector((state: {users: UserState}) => state.users.filtered_users)
  const textFilter = useSelector((state: {filters: FilterState}) => state.filters.textFilter)
  const filtered = useSelector((state: {filters: FilterState}) => state.filters.filtered)

  const showTableHeader = () => {
    if (filtered && filtered_users.length === 0) return false;
    return filtered || users.length > 0
  }

  const handleUpdateFilter = (value: string) => {
    dispatch(applyTextFilter(value))
  }

  return (
    <UserTableContainer>
      <UserTableFilterContainerDiv
        style={showTableHeader() ? {paddingBottom: 0} : {}}  className={'sticky-large-screen'}
      >
        <UserTableDivs.header.searchDiv>
          <BorderedContainer style={{width: '100%'}}>
            <MagGlass style={UserTableStylings.search.magIconDiv} fillColor={inputBorderColor} lineColor={inputBorderColor}/>
            <FilterInputFieldFullWidthDiv
              name={'user-search'}
              style={{ margin : `0`}}
              // className={'filter-input-planned'}
              placeholder={'Search Users'}
              value={textFilter}
              onChange={(e) => handleUpdateFilter(e.target.value)}
            />
          </BorderedContainer>
        </UserTableDivs.header.searchDiv>
        {showTableHeader() ? <UserHeaderCustom/> : null}
      </UserTableFilterContainerDiv>
      <UserTableCustomComponent />
    </UserTableContainer>
  );
}

export default UserTableComponent;
