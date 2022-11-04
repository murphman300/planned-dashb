import {css} from "styled-components";

export const  inputBorderColor = '#EAECEF';

export const  textColor = '#0B223C';

export const  lighterTextColor = 'rgba(11,34,60,0.6)';

export const  buttonColor = '#51a17e';

/**
 * Sizes
 */

export const  fontSize = 18;

export const  containerCornerRadius = 10;

export const  commonContainerPadding = 30;

export const  commonInnerInputPadding = 20;

export const  largeScreenBreakpointWidth = 1200;

export const  smallerSizeContentWidth = largeScreenBreakpointWidth * 0.62;

export const  devices = {
  mobile: `(max-width: ${smallerSizeContentWidth}px)`,
  smaller: `(max-width: ${largeScreenBreakpointWidth}px)`,
  larger: `(min-width: ${largeScreenBreakpointWidth}px)`,
}

export const BorderThicknessAndColor = css`
  border: 1px solid ${inputBorderColor};
`
export const inlineFlexColumn = css`
  display: inline-flex;
  flex-direction: column;
`
export const inlineFlexRow = css`
  display: inline-flex;
  flex-direction: row;
`

export const sticky = css`
  position: -webkit-sticky;
  position: sticky;
  top: 40px;

  @media ${devices.smaller} {
    top: 0px;
  }
`

export const stickyTopOnLarge = css`
  ${sticky};
  top: 0px;
`

export const boxShadowed = css`
  -webkit-box-shadow: 0px 0px 4px 1px rgba(199, 199, 199, 0.2);
  -moz-box-shadow: 0px 0px 4px 1px rgba(199, 199, 199, 0.2);
  box-shadow: 0px 0px 4px 1px rgba(199, 199, 199, 0.2);
`
