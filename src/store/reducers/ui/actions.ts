import {DispatchUIState} from "./types";
export const SET_DISPLAY_POPOVER = "SET_DISPLAY_POPOVER";
export const SET_DISPLAY_POPOVER_TEXT = "SET_DISPLAY_POPOVER_TEXT";

export const setDisplayPopover = (value: boolean): DispatchUIState => {
  return { type: SET_DISPLAY_POPOVER, payload: value }
}
export const setDisplayPopoverText = (value: string): DispatchUIState => {
  return { type: SET_DISPLAY_POPOVER_TEXT, payload: value }
}

