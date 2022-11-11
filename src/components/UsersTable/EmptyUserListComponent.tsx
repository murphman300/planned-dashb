import {EmptyUserTableLabelDiv, UserTableDivs} from "../../themes/components";
import React from "react";


export type EmptyUserListComponentProps = {
  label: string;
}

export const EmptyUserListComponent = ({label}: EmptyUserListComponentProps) => {
  return(
    <UserTableDivs.table>
      <UserTableDivs.body>
        <EmptyUserTableLabelDiv>
          <h3>{label}</h3>
        </EmptyUserTableLabelDiv>
      </UserTableDivs.body>
    </UserTableDivs.table>
  )
}
