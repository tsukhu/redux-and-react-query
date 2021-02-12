import {
  SELECT_TODO,
  SelectTodoActionType
} from "./actions";

type SelectedTodoActionTypes = SelectTodoActionType;
export const selectedTodoReducer = (
  state: string | null = null,
  action: SelectedTodoActionTypes
) => {
  switch (action.type) {
    case SELECT_TODO: {
      const { payload } = action;
      return payload.id;
    }
    default: {
      return state;
    }
  }
};

export default selectedTodoReducer;