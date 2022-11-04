/**
 * Colors
 */
import {
  commonContainerPadding,
  commonInnerInputPadding,
  fontSize,
  inputBorderColor,
} from "./variables";
/**
 * Common stylings
 */

const inlineFlexColumn = {
  display: 'inline-flex',
  "flex-direction": "column",
}

const inlineFlexRow= {
  display: 'inline-flex',
  "flex-direction": "row",
}

export const borderOnlyOnBottom = {
  borderBottom: `1px solid ${inputBorderColor}`,
}


/**
 *
 * Component Stylings
 *
 */

export const UserTableStylings = {
  search: {
    magIcon : {
      height: '100%',
      width: '100%',
    },
    magIconDiv : {
      ...inlineFlexRow,
      margin: 0,
      padding: 0,
      height: 20,
      width: 20,
      color: inputBorderColor
    }
  },
  table: {
    ...inlineFlexColumn,
    listStyle: 'none',
    margin: 0,
    padding: 0,
    width: '100%'
  },
  header: {
    div: {
      ...inlineFlexRow,
    },
    searchDiv: {
      ...inlineFlexRow,
      ...borderOnlyOnBottom,
      paddingLeft: commonContainerPadding,
      paddingRight: commonContainerPadding,
      paddingBottom: commonContainerPadding,
    },
    column: {
      div: {
        ...inlineFlexRow,
        paddingTop: commonInnerInputPadding,
        'text-align': 'left',
        width: '47.5%'
      }
    }
  },
  body: {
    ...inlineFlexColumn,
    width: '100%',
    padding:0,
  }
}


export const ListDispplayComponentULListLineItemStylings = {
  ...inlineFlexRow,
  marginBottom: commonContainerPadding
}


/**
 * Inputs - fields
 */

export const FilterInputFieldGuidanceStylings = {
  margin: 0,
  fontSize,
  fontWeight: 'semi-bold',
  alignItems: 'bottom'
}
