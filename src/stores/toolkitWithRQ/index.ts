import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./features/users/reducers";
import gifReducer from "./features/gif/reducers";

const middleware = [...getDefaultMiddleware({ thunk: false })];

const store = configureStore({
  reducer: {
    users: userReducer,
    gif: gifReducer
  },
  middleware
});

export default store;
