import { createSlice, createAction } from "@reduxjs/toolkit";

const gifInitialState = {
  data: "",
  loading: false,
  error: false
};

const gifSlice = createSlice({
  name: "gif",
  initialState: gifInitialState,
  reducers: {
    fetch: (state) => {
      state.loading = true;
      state.error = false;
      state.data = "";
    },
    clear: (state) => {
      state.loading = false;
      state.error = false;
      state.data = "";
    },
    fetchSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    fetchFailure: (state, action) => {
      state.error = action.payload.error;
      state.loading = false;
    }
  }
});

export default gifSlice.reducer;
export const { fetch, clear, fetchSuccess, fetchFailure } = gifSlice.actions;
export const selectGif = (state: { gif: { data: any } }) => state.gif.data;
export const selectLoading = (state: { gif: { loading: any } }) =>
  state.gif.loading;
export const selectError = (state: { gif: { error: any } }) => state.gif.error;

export const fetchGifAsync = createAction("GIF_FETCH_ASYNC");
