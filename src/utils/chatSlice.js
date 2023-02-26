import { createSlice } from "@reduxjs/toolkit";
import { YOUTUBE_OFFSET_CHAT } from "./constant";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },
  reducers: {
    addmsg: (state, action) => {
      state.message.splice(YOUTUBE_OFFSET_CHAT, 1);
      state.message.unshift(action.payload);
    },
  },
});

export const { addmsg } = chatSlice.actions;

export default chatSlice.reducer;
