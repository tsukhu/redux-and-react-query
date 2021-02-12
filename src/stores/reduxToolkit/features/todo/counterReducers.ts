import { createSlice } from "@reduxjs/toolkit";
import { todosSlice } from "./todoReducers";

export const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {},
  extraReducers: {
    [todosSlice.actions.createTodo.type]: (state) => state + 1,
    [todosSlice.actions.editTodo.type]: (state) => state + 1,
    [todosSlice.actions.toggleTodo.type]: (state) => state + 1,
    [todosSlice.actions.deleteTodo.type]: (state) => state + 1,
  },
});
export default counterSlice.reducer;

export const selectCounter = (state: { counter: any }) => state.counter;
