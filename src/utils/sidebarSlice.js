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
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});
export const { toggleMenu, closeMenu } = sidebarSlice.actions;

export default sidebarSlice.reducer;
