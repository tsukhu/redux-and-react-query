import { fork, all } from "redux-saga/effects";
import { watchFetchGif } from "./gif/sagas";

import { watchFetchUsers } from "./users/sagas";

export default function* rootSaga() {
  yield all([fork(watchFetchGif), fork(watchFetchUsers)]);
}
