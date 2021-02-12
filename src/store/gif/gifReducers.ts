import {
  GIF_FETCH_START,
  GIF_FETCH_SUCCEED,
  GIF_FETCH_FAILED,
  GIF_CLEAR
} from "./actions";

const gifInitialState = {
  url: "",
  loading: false,
  error: false
};

export const gif = (state = gifInitialState, action: any) => {
  switch (action.type) {
    case GIF_FETCH_START:
      return { url: "", loading: true };
    case GIF_FETCH_SUCCEED:
      return { url: action.payload, loading: false, error: false };
    case GIF_FETCH_FAILED:
      console.error(action.payload);
      return { ...state, loading: false, error: true };
    case GIF_CLEAR:
      return { url: "", loading: false, error: false };
    default:
      return state;
  }
};
