import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./chatSlice";
import searchSlice from "./searchSlice";
import sidebarSlice from "./sidebarSlice";

const store = configureStore({
  reducer: {
    appslice: sidebarSlice,
    search: searchSlice,
    chat: chatSlice,
  },
});

export default store;
