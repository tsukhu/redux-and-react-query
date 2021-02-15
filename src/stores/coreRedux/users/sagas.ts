import { call, put, takeLatest } from "redux-saga/effects";
import { usersActions, USERS_FETCH_ASYNC } from "./actions";
import { getUsers } from "../../../api/getUsers";

function* fetchUsers() {
  yield put(usersActions.startFetch());

  try {
    const response = yield call(getUsers);
    yield put(usersActions.successFetch(response));
  } catch (err) {
    yield put(usersActions.failFetch(err));
  }
}

export function* watchFetchUsers() {
  yield takeLatest(USERS_FETCH_ASYNC, fetchUsers);
}
