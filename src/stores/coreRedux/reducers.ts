import { combineReducers } from "redux";
import { gif } from "./gif/gifReducers";
import { users } from "./users/usersReducers";
import { counterReducer } from "./todo/counterReducers";
import { selectedTodoReducer } from "./todo/selectedTodosReducers";
import { todosReducer } from "./todo/todoReducers";

export default combineReducers({
  gif,
  users,
  todos: todosReducer,
  selectedTodoId: selectedTodoReducer,
  counter: counterReducer,
});
