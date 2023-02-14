import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "appslice",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});
export const { toggleMenu } = sidebarSlice.actions;

export default sidebarSlice.reducer;
