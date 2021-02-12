import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const selectedTodoIdSlice = createSlice({
  name: "selectedTodo",
  initialState: "",
  reducers: {
    selectTodo: (state, { payload }: PayloadAction<{ id: string }>) =>
      payload.id,
  },
});

export const selectSelectedTodoId = (state: { selectedTodoId: any }) =>
  state.selectedTodoId;

export const { selectTodo } = selectedTodoIdSlice.actions;
export default selectedTodoIdSlice.reducer;
