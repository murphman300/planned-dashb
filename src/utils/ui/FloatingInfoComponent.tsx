
import React from "react";
import {useDispatch} from "react-redux";
import {setDisplayPopover, setDisplayPopoverText} from "../../store/reducers/ui/actions";
import styled from "styled-components";
export type FloatingInfoComponentProps = {
  infoText?: string,
  disablePointer?: true | undefined,
  children: JSX.Element[] | JSX.Element
}

const FloatingInfoComponentDiv = styled.div`
  display: inherit;
  margin: 0;
  padding: 0;
  width: auto;
  height: auto;
  cursor: pointer;
`

/**
 * Component which takes care of displaying info text on top of a hoverable element
 * @param infoText
 * @param children
 * @param disablePointer
 * @constructor
 */
export const FloatingInfoComponent = ({infoText, children, disablePointer}: FloatingInfoComponentProps) => {

  const dispatch = useDispatch();

  return(
    <FloatingInfoComponentDiv onMouseOver={()=> {
      dispatch(setDisplayPopover(true))
      dispatch(setDisplayPopoverText(infoText ?? 'Oops, looks like you forgot to specify infoText!'))
    }} onMouseOut={()=> {
      dispatch(setDisplayPopover(false))
      dispatch(setDisplayPopoverText(''))
    }} style={disablePointer ? {cursor: "none"} : {}}>
      {children}
    </FloatingInfoComponentDiv>
  )
}
