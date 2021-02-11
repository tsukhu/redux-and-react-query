import { fork, all } from "redux-saga/effects";
import { watchFetchGif } from "./features/gif/sagas";
import { watchFetchUsers } from "./features/users/sagas";

export default function* rootSaga() {
  yield all([fork(watchFetchGif), fork(watchFetchUsers)]);
}
