import { call, put, takeLatest } from "redux-saga/effects";
import { fetch, fetchSuccess, fetchFailure, fetchUsersAsync } from "./reducers";
import { getUsers } from "../../../../api/getUsers";

function* fetchUsers() {
  yield put(fetch());

  try {
    const response = yield call(getUsers);
    yield put(fetchSuccess(response));
  } catch (err) {
    yield put(fetchFailure(err));
  }
}

export function* watchFetchUsers() {
  yield takeLatest(fetchUsersAsync, fetchUsers);
}
