import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import userReducer from "./features/users/reducers";
import gifReducer from "./features/gif/reducers";
import todosReducer from "./features/todo/todoReducers";
import selectedTodoReducer from "./features/todo/selectedTodosReducers";
import counterReducer from "./features/todo/counterReducers";
import rootSaga from "./sagas";

let sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: {
    users: userReducer,
    gif: gifReducer,
    todos: todosReducer,
    selectedTodoId: selectedTodoReducer,
    counter: counterReducer,
  },
  middleware,
});

sagaMiddleware.run(rootSaga);
export default store;
