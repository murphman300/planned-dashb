import {
  ListDispplayComponentULListLineItemStylings,
} from "../themes/theme";
import React from "react";
import {FilterBoxComponentDiv, ListDispplayComponentULListUl} from "../themes/components";


type CustomListContainerProps = {
  children: JSX.Element[],
};

export const ListDisplayComponent = ({children}: CustomListContainerProps) => {
  return (
    <FilterBoxComponentDiv style={{paddingBottom: 0,}}>
      <ListDispplayComponentULListUl
      >
        {React.Children.toArray(children).map((child, index) => <li
          key={`list-display-component-list-item-${index}`}
          style={ListDispplayComponentULListLineItemStylings}>
          {child}
        </li>)}
      </ListDispplayComponentULListUl>
    </FilterBoxComponentDiv>
  )
}
