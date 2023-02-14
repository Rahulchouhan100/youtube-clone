import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";

const store = configureStore({
  reducer: {
    appslice: sidebarSlice,
  },
});

export default store;
