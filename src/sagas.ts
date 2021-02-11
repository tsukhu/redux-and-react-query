import { call, put, takeLatest, fork,all } from "redux-saga/effects";
import { gifActions, GIF_FETCH_ASYNC } from "./actions";
import gifApi from "./api/gif";

function* fetchGif() {
  yield put(gifActions.startFetch());

  try {
    // 非同期処理を呼び出す
    const response = yield call(gifApi.random);
    // 非同期処理が完了したらReduxに処理を移す
    yield put(gifActions.successFetch(response.url));
  } catch(err) {
    yield put(gifActions.failFetch(err));
  }
}

function* watchFetchGif() {
  // 特定のアクションを監視する
  yield takeLatest(GIF_FETCH_ASYNC, fetchGif);
}

export default function* rootSaga() {
  yield all([
    fork(watchFetchGif)
  ]);
}
