import {SET_DISPLAY_POPOVER, SET_DISPLAY_POPOVER_TEXT} from "./actions";
import {DispatchUIState, UIState} from "./types";

const initialState: UIState = {
  displayCursorPopover: false,
  cursorPopoverText: '',
}

export const uiReducer = function (state = initialState, action: DispatchUIState) {
  switch (action.type) {
    case SET_DISPLAY_POPOVER:
      return {
        ...state,
        displayCursorPopover: action.payload,
      }
    case SET_DISPLAY_POPOVER_TEXT:
      return {
        ...state,
        cursorPopoverText: action.payload,
      }
    default:
      return state;
  }
};

