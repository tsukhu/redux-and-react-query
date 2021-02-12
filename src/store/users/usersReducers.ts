import {
  USERS_FETCH_START,
  USERS_FETCH_SUCCEED,
  USERS_FETCH_FAILED,
  USERS_CLEAR
} from "./actions";

const usersInitialState = {
  users: [],
  loading: false,
  error: false
};

export const users = (state = usersInitialState, action: any) => {
  switch (action.type) {
    case USERS_FETCH_START:
      return { users: [], loading: true };
    case USERS_FETCH_SUCCEED:
      return { users: action.payload, loading: false, error: false };
    case USERS_FETCH_FAILED:
      console.error(action.payload);
      return { ...state, loading: false, error: true };
    case USERS_CLEAR:
      return { users: [], loading: false, error: false };
    default:
      return state;
  }
};

export default users;
