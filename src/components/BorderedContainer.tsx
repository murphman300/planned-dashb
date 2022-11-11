import React from "react";
import {BorderedFilterContainerDiv} from "../themes/components";

type CustomProps = {
  children: JSX.Element | JSX.Element[],
  style?: object,
};

export const BorderedContainer = ({children, style}: CustomProps) => {
  return(
    <BorderedFilterContainerDiv style={style ? style : {}}>{children}</BorderedFilterContainerDiv>
  )
}
