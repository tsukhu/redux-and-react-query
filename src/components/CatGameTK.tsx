import * as React from "react";
import Gif from "./Gif";
import { useSelector, useDispatch } from "react-redux";
import {
  clear,
  selectError,
  selectLoading,
  selectGif,
  fetchGifAsync
} from "../storeTK/features/gif/reducers";

function renderGif({ imageUrl, loading, error }) {
  if (error) {
    return <p className="notification is-danger">Error!!</p>;
  }

  if (loading) {
    return <p className="notification is-info">Loading...</p>;
  }

  return imageUrl ? (
    <Gif imageUrl={imageUrl} />
  ) : (
    <p className="notification">Welcome to the cat game!</p>
  );
}

const CatGameTK: React.FC<any> = () => {
  const imageUrl = useSelector(selectGif);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  return (
    <section className="section">
      <h1 className="title">Cat Game</h1>
      {renderGif({ imageUrl, loading, error })}
      <hr />
      <div className="buttons">
        <button
          className="button is-primary is-rounded"
          onClick={() => dispatch(fetchGifAsync())}
        >
          Play
        </button>
        <button className="button is-rounded" onClick={() => dispatch(clear())}>
          Clear
        </button>
      </div>
    </section>
  );
};

export default CatGameTK;
