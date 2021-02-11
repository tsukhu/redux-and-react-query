import { createSlice } from "@reduxjs/toolkit";

const gifInitialState = {
  data: ""
};

const gifSlice = createSlice({
  name: "gif",
  initialState: gifInitialState,
  reducers: {
    setGif: (state, { payload }) => {
      state.data = payload;
    },
    clear: (state) => {
      state.data = "";
    }
  }
});

export default gifSlice.reducer;
export const { setGif, clear } = gifSlice.actions;
export const selectGif = (state: { gif: { data: any } }) => state.gif.data;
