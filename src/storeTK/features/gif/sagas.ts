import { call, put, takeLatest } from "redux-saga/effects";
import { fetch, fetchSuccess, fetchFailure, fetchGifAsync } from "./reducers";
import gifApi from "../../../api/gif";

function* fetchGif() {
  yield put(fetch());

  try {
    const response = yield call(gifApi.random);
    yield put(fetchSuccess(response.url));
  } catch (err) {
    yield put(fetchFailure(err));
  }
}

export function* watchFetchGif() {
  yield takeLatest(fetchGifAsync, fetchGif);
}
