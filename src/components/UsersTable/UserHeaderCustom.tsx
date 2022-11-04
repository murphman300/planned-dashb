import {useDispatch, useSelector} from "react-redux";
import {
  UserSortDirectionNegation,
  UserSortOptions,
} from "../../models/UserUtilTypes";
import {applySortAge, applySortName,} from "../../store/reducers/filters/actions";
import {UserTableDivs, UserTableRowDivs} from "../../themes/components";
import React from "react";
import {FilterState} from "../../store/reducers/filters/types";
import { FaSave } from 'react-icons/fa';
import {FloatingInfoComponent} from "../../utils/ui/FloatingInfoComponent";


export const UserHeaderCustom = () => {

  const dispatch = useDispatch()
  const sort_name = useSelector((state: {filters: FilterState}) => state.filters.sort_name)
  const sort_age = useSelector((state: {filters: FilterState}) => state.filters.sort_age)

  const handleSortArrowClick = (from: UserSortOptions) => {
    switch (from) {
      case UserSortOptions.fullName:
        dispatch(applySortName(UserSortDirectionNegation(sort_name)))
        break
      case UserSortOptions.age:
        dispatch(applySortAge(UserSortDirectionNegation(sort_age)))
        break
    }
  }

  return(
    <UserTableDivs.header.div className={"sticky-large-screen"}>
      <UserTableRowDivs.checkbox.mockedInput>
        <FloatingInfoComponent infoText={'Specifies if you have saved the user locally'} disablePointer>
          <FaSave style={{cursor: 'pointer', justifyContent: 'center', marginTop: 4}}/>
        </FloatingInfoComponent>
      </UserTableRowDivs.checkbox.mockedInput>
      <UserTableDivs.header.column.div1st>
        <FloatingInfoComponent infoText={'Filter by name'}>
          <UserTableDivs.header.label.p>
            Name <img alt={"arrow-img-name"} style={{cursor: 'pointer'}} onClick={() => handleSortArrowClick(UserSortOptions.fullName)} src={'/sort-arrows.svg'}/>
          </UserTableDivs.header.label.p>
        </FloatingInfoComponent>
      </UserTableDivs.header.column.div1st>
      <UserTableDivs.header.column.div2nd className={"end-column"}>
        <FloatingInfoComponent infoText={'Filter by age'}>
          <UserTableDivs.header.label.p>
            Age <img alt={"arrow-img-age"} style={{cursor: 'pointer'}} onClick={() => handleSortArrowClick(UserSortOptions.age)} src={'/sort-arrows.svg'}/>
          </UserTableDivs.header.label.p>
        </FloatingInfoComponent>
      </UserTableDivs.header.column.div2nd>
    </UserTableDivs.header.div>
  )
}
