import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import userReducer from "./features/users/reducers";
import gifReducer from "./features/gif/reducers";
import rootSaga from "./sagas";

let sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: {
    users: userReducer,
    gif: gifReducer
  },
  middleware
});

sagaMiddleware.run(rootSaga);
export default store;
