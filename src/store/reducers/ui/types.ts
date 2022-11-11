
export interface UIState {
  displayCursorPopover: false,
  cursorPopoverText: '',
}

export type DispatchUIState = {
  type: string;
  payload?: string | boolean | UIState
}
