import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./features/users/reducers";
import gifReducer from "./features/gif/reducers";
import { gifApi } from "./services/gif";
import { usersApi } from "./services/users";

const middleware = [
  ...getDefaultMiddleware(),
  gifApi.middleware,
  usersApi.middleware,
];

const store = configureStore({
  reducer: {
    users: userReducer,
    gif: gifReducer,
    // Add the generated reducer as a specific top-level slice
    [gifApi.reducerPath]: gifApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware,
});

export default store;
