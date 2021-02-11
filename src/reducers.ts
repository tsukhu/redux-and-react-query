import { combineReducers } from "redux";
import {
  GIF_FETCH_START,
  GIF_FETCH_SUCCEED,
  GIF_FETCH_FAILED,
  GIF_CLEAR } from "./actions";

const gifInitialState = {
  url: "",
  loading: false,
  error: false
};

function gif(state = gifInitialState, action) {
  switch (action.type) {
    case GIF_FETCH_START:
      return Object.assign({}, state, { url: "", loading: true });

    case GIF_FETCH_SUCCEED:
      return Object.assign({}, state, { url: action.payload, loading: false });

    case GIF_FETCH_FAILED:
      console.error(action.payload);
      return Object.assign({}, state, { loading: false, error: true });

    case GIF_CLEAR:
      return { url: "", loading: false, error: false };

    default:
      return state;
  }
}

export default combineReducers({ gif });
