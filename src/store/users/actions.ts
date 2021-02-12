export const USERS_FETCH_ASYNC = "USERS_FETCH_ASYNC";
export const USERS_FETCH_START = "USERS_FETCH_START";
export const USERS_FETCH_SUCCEED = "USERS_FETCH_SUCCEED";
export const USERS_FETCH_FAILED = "USERS_FETCH_FAILED";
export const USERS_CLEAR = "USERS_CLEAR";

export const usersActions = {
  asyncFetch() {
    return { type: USERS_FETCH_ASYNC };
  },

  startFetch() {
    return { type: USERS_FETCH_START };
  },

  successFetch(payload: any) {
    return { type: USERS_FETCH_SUCCEED, payload };
  },

  failFetch(payload: any) {
    return { type: USERS_FETCH_FAILED, payload };
  },

  clearUsers() {
    return { type: USERS_CLEAR };
  }
};
