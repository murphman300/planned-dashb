import {borderOnlyOnBottom} from "../../themes/theme";
import {UserTableRowDivs} from "../../themes/components";
import {User} from "../../models/User";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {UserState} from "../../store/reducers/users/types";
import {addSavedUser, removeSavedUser} from "../../store/reducers/users/actions";
import {FloatingInfoComponent} from "../../utils/ui/FloatingInfoComponent";

export type UserRowProps = {
  user: User,
  index?: number,
  length?: number
};

export const UserRowCustom = ({user, index, length}: UserRowProps) => {

  const dispatch = useDispatch();
  const saved = useSelector((state: {users: UserState}) => state.users.saved[User.userId(user)])

  const rowBorderStyleFromIndex = () => {
    switch (index) {
      case (length ?? 0) - 1:
        return {};
      default:
        return {...borderOnlyOnBottom}
    }
  }

  const handleTogglingSaveUser = (e: any) => {
    if (!!saved){
      dispatch(removeSavedUser(user))
    } else {
      dispatch(addSavedUser(user))
    }
  }

  return(
    <UserTableRowDivs.row style={rowBorderStyleFromIndex()} key={`user-row-number-${index}`}>
      <UserTableRowDivs.checkbox.div>
        <FloatingInfoComponent infoText={!!saved ? "Unsave" : "Save"}>
          <UserTableRowDivs.checkbox.input type={'checkbox'} key={`user-row-checkbox-number-${index}`} checked={!!saved} onChange={handleTogglingSaveUser}/>
        </FloatingInfoComponent>
      </UserTableRowDivs.checkbox.div>
      <UserTableRowDivs.name.div key={`user-row-number-${index}`}>
        <FloatingInfoComponent infoText={user.email}>
          <UserTableRowDivs.name.label>
            {User.fullName(user)}
          </UserTableRowDivs.name.label>
        </FloatingInfoComponent>
      </UserTableRowDivs.name.div>
      <UserTableRowDivs.age.div>
        <UserTableRowDivs.name.label>
          {user.age}
        </UserTableRowDivs.name.label>
      </UserTableRowDivs.age.div>
    </UserTableRowDivs.row>
  )
}
