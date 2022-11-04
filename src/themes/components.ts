import {
  BorderThicknessAndColor,
  commonContainerPadding,
  containerCornerRadius,
  inlineFlexColumn,
  inputBorderColor,
  lighterTextColor,
  smallerSizeContentWidth,
  devices,
  commonInnerInputPadding,
  inlineFlexRow,
  fontSize,
  textColor,
  sticky,
  buttonColor,
  stickyTopOnLarge, boxShadowed,
} from "./variables";
import styled, {css} from "styled-components";

export const HeaderMenuTitleP = styled.p`
  color: ${textColor};
  margin: 0 40px;
  font-size: 22px;
  font-weight: 600;
`

const standardContainerBoxStylings = css`
  background-color: white;
  padding: ${commonContainerPadding}px;
  border-radius: ${containerCornerRadius}px;
  ${BorderThicknessAndColor}
`

export const FilterInputFieldLabel = styled.p`
  margin: 0;
  font-size: ${fontSize}px;
  font-weight: 500;
  align-items: flex-end;
`

const FilterInputDiv = css`
  display: inline-flex;
  border: none;
  margin-left: ${commonInnerInputPadding * 0.7};
  font-size: ${fontSize}px;
  font-weight: 400;
  color: ${textColor};
  padding-left: ${commonContainerPadding}px;
  outline: none;
`

export const FilterInputFieldDiv = styled.input`
  ${FilterInputDiv}

  @media ${devices.smaller} {
    max-width: 100px;
  }

  .full-width {
    max-width: 100%;
    width: 100%;
  }
`

export const FilterInputFieldFullWidthDiv = styled.input`
  ${FilterInputDiv};
  max-width: 100%;
  width: 100%;
`


export const BorderedFilterContainerDiv = styled.div`
  ${inlineFlexRow};
  border-radius: ${containerCornerRadius}px;
  ${BorderThicknessAndColor};
  color: ${inputBorderColor};
  padding: ${commonInnerInputPadding}px;
  padding-left: ${commonInnerInputPadding}px;
  padding-right: ${commonInnerInputPadding}px;
  margin-left: 0;
  margin-right: 0;
  width: 100%;

  ${FilterInputFieldFullWidthDiv}::placeholder {
    color: #EAECEF
  }
`


export const FilterBoxComponentDiv = styled.div`
  ${inlineFlexColumn}
  ${standardContainerBoxStylings}
  ${boxShadowed}
  justify-content: center;
  max-height: 280px;
  ${sticky}
`

export const ListDispplayComponentULListUl = styled.ul`
  ${inlineFlexColumn};
  margin: 0;
  padding: 0;
  list-style: none;


  @media ${devices.smaller} {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;

  }


  @media (max-width: 490px) {
    flex-direction: column;
    align-items: center;

    li {
      width: 100%;
    }
  }
`

export const PlannedCTAButtonButtonDiv = styled.button`
  background-color: transparent;
  border: none;

  @media (max-width: 490px) {
    width: 100%;
  }
`

export const PlannedCTAButtonButton = styled.button`
  background-color: ${buttonColor};
  border-radius: ${commonContainerPadding}px;
  min-height: ${commonContainerPadding}px;
  padding: 20px;
  font-size: ${fontSize}px;
  font-weight: 500;
  border: none;
  color: white;
  margin-right: 0;
  margin-left: 0;

  @media (max-width: 490px) {
    width: 100%;
  }
`

export const UserTableContainerDiv = styled.div`
  background-color: white;
  ${inlineFlexColumn}
  ${standardContainerBoxStylings}
  ${boxShadowed}
  padding: 0;

  @media (${devices.mobile}) {
    width: 100%;
    max-width: 100%;
  }

  @media (${devices.smaller}) {
    width: ${smallerSizeContentWidth}px;
    max-width: 100%;
  }

  @media (${devices.larger}) {
    width: ${smallerSizeContentWidth}px;
  }
`

export const EmptyUserTableLabelDiv = styled.div`
  margin: ${commonContainerPadding};
  padding: ${commonContainerPadding}px;
  align-self: center;
  color: ${lighterTextColor};
  text-align: center;
`

export const UserTableDivs = {
  search: {
    magIcon : styled.div`
      height: 100%;
      width: 100%;
    `,
    magIconDiv : styled.div`
      ${inlineFlexRow};
      margin: 0;
      padding: 0;
      height: 20px;
      width: 20px;
      color: ${inputBorderColor}
    `
  },
  table: styled.div`
    ${inlineFlexColumn};
    list-style: none;
    margin: 0;
    padding: 0;
  `,
  header: {
    div: styled.div`
      ${inlineFlexRow};
      ${sticky}
      padding-left: ${commonContainerPadding}px;
      padding-right: ${commonContainerPadding}px;
    `,
    searchDiv: styled.div`
      ${inlineFlexRow};
      padding-left: ${commonContainerPadding}px;
      padding-right: ${commonContainerPadding}px;
      border-bottom: 1px solid ${inputBorderColor};
      padding-bottom: ${commonContainerPadding}px;
    `,
    column: {
      div1st: styled.div`
        ${inlineFlexRow};
        padding-top: ${commonInnerInputPadding}px;
        text-align: left;
        width: 47.5%;
      `,
      div2nd: styled.div`
        ${inlineFlexRow};
        padding-top: ${commonInnerInputPadding}px;
        text-align: left;
        width: 47.5%;

        @media (${devices.smaller}) {
          justify-content: flex-end;
        }
      `,
    },
    label: {
      p: styled.p`
        font-size: ${fontSize}px;
        color: ${textColor};
        font-weight: bold;
        margin: 0;
      `
    }
  },
  body: styled.div`
    ${inlineFlexColumn};
    width: 100%;
    padding: 0;
  `,
}


export const UserTableRowDivs = {
  row: styled.div`
    ${inlineFlexRow};
    width: 100%;
  `,
  checkbox: {
    div: styled.div`
      ${inlineFlexRow};
      padding: ${commonInnerInputPadding * 0.9}px;
      padding-left: ${commonContainerPadding}px;
    `,
    input: styled.input`
      width: ${fontSize}px;
      height: ${fontSize}px;
      margin: 0;
      accent-color: ${buttonColor};
      cursor: pointer;
    `,
    mockedInput: styled.div`
      ${inlineFlexRow};
      padding: ${commonInnerInputPadding * 0.9}px;
      padding-left: 0;
      min-height: ${fontSize}px;
      min-width: ${fontSize}px;
    `,
  },
  name: {
    div: styled.div`
      ${inlineFlexRow};
      width: 47.5%;
      padding-top: ${commonInnerInputPadding * 0.9}px;
      padding-bottom: ${commonInnerInputPadding * 0.9}px;
    `,
    label: styled.p`
      font-size: ${fontSize}px;
      color: ${textColor};
      font-weight: 500;
      margin: 0;
    `
  },
  age: {
    div: styled.div`
      ${inlineFlexRow};
      width: 47.5%;
      padding-top: ${commonInnerInputPadding * 0.9}px;
      padding-bottom: ${commonInnerInputPadding * 0.9}px;

      @media (${devices.smaller}) {
        padding-right: ${commonContainerPadding}px;
        justify-content: flex-end;
        p {
          align-self: flex-end;
        }
      }
    `,
  },
}

export const UserTableFilterContainerDiv = styled.div`
  ${inlineFlexColumn}
  ${standardContainerBoxStylings}
  background-color: white;
  border-radius: 0;
  border-top-right-radius: ${containerCornerRadius}px;
  border-top-left-radius: ${containerCornerRadius}px;
  justify-content: center;
  border: none;
  padding-left: 0;
  padding-right: 0;
  ${sticky};

  @media ${devices.larger} {
    ${stickyTopOnLarge}
  }
`
