import { createSlice } from "@reduxjs/toolkit";
import NavigationState from "../../admin/interfaces/props/NavigationStateProps";

const initialState: NavigationState = {
  open: true,
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    toggleNavigation: (state: NavigationState) => {
      state.open = !state.open;
    },
  },
});

export const navigationActions = navigationSlice.actions;
export default navigationSlice;
