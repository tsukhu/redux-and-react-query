import { call, put, takeLatest } from "redux-saga/effects";
import { gifActions, GIF_FETCH_ASYNC } from "./actions";
import gifApi from "../../api/gif";

function* fetchGif() {
  yield put(gifActions.startFetch());

  try {
    const response = yield call(gifApi.random);
    yield put(gifActions.successFetch(response.url));
  } catch (err) {
    yield put(gifActions.failFetch(err));
  }
}

export function* watchFetchGif() {
  yield takeLatest(GIF_FETCH_ASYNC, fetchGif);
}
