import styled from "styled-components";
import {
  commonContainerPadding,
  devices,
  fontSize, inlineFlexColumn, inlineFlexRow,
  largeScreenBreakpointWidth,
} from "./variables";

export const AppParentContainer = styled.div`
  ${inlineFlexColumn};
  justify-content: center;
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
`


export const AppHeader = styled.div`
  ${inlineFlexRow};
  width: 100%;
  background-color: white;
  align-items: center;
`

export const ContentContainerDiv = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-bottom: 60px;
  align-self: center;
  @media (${devices.mobile}) {
    width: 98%;
  }

  @media ${devices.smaller} {
    width: 96%;
  }

  @media ${devices.larger} {
    width: ${largeScreenBreakpointWidth}px;
  }
`
export const ContentContainerChildDiv = styled.div`

  justify-content: center;
  align-self: center;

  @media (${devices.mobile}) {
    //width: inherit;
  }

  @media ${devices.smaller} {
    ${inlineFlexColumn};
  }

  @media ${devices.larger} {
    ${inlineFlexColumn};
    width: ${largeScreenBreakpointWidth}px;
  }
`

export const ContentSectionContainerDiv = styled.div`

  display: inline-flex;
  flex-direction: column;
  padding-top: ${commonContainerPadding}px;
  justify-content: center;
  align-self: center;

  @media (${devices.mobile}) {
    width: 100%;
  }

  @media ${devices.smaller} {
    justify-content: center;
    margin-bottom: 40px;
  }

  @media ${devices.larger} {
    width: 100%;
  }

`

export const ContentSectionTitleH1 = styled.h1`
  color: #364458;
  height: ${fontSize * 4}px;
  margin: 0;
  justify-content: center;
  align-self: center;
  width: 100%;

  @media ${devices.mobile} {
    //width: 98vw;
  }

  @media ${devices.smaller} {
    //width: inherit;
  }

  @media ${devices.larger} {
    //width: inherit;
  }

`

export const ContentSectionContainerContentDiv = styled.div`
  display: inline-flex;
  width: 100%;

  @media ${devices.smaller} {
    flex-direction: column;
  }

  @media ${devices.larger} {
    flex-direction: row;
    justify-content: space-between;
    //background-color: red;
  }

`

export const ContentSectionContainerContentChildDiv = styled.div`

  display: inline-flex;
  margin: 10px 0px;
  @media ${devices.smaller} {
    margin: 10px 0px;
    justify-content: center;
  }

  @media ${devices.smaller} {
    flex-direction: column;
  }

  @media ${devices.larger} {
    flex-direction: row;
    justify-content: space-between;
  }

`

