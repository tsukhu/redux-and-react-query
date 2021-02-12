export const GIF_FETCH_ASYNC = "GIF_FETCH_ASYNC";
export const GIF_FETCH_START = "GIF_FETCH_START";
export const GIF_FETCH_SUCCEED = "GIF_FETCH_SUCCEED";
export const GIF_FETCH_FAILED = "GIF_FETCH_FAILED";
export const GIF_CLEAR = "GIF_CLEAR";

export const gifActions = {
  asyncFetch() {
    return { type: GIF_FETCH_ASYNC };
  },

  startFetch() {
    return { type: GIF_FETCH_START };
  },

  successFetch(payload: any) {
    return { type: GIF_FETCH_SUCCEED, payload };
  },

  failFetch(payload: any) {
    return { type: GIF_FETCH_FAILED, payload };
  },

  clearGif() {
    return { type: GIF_CLEAR };
  }
}
