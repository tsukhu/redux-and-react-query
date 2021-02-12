import * as React from "react";
import Gif from "./Gif";

function renderGif({ imageUrl, loading, error } : { imageUrl: string, loading: boolean, error: boolean}) {
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

interface CatGameProps {
  imageUrl: string;
  loading: boolean;
  error: boolean;
  play: () => void;
  clear: () => void;
}

const CatGame: React.FC<CatGameProps> = ({
  imageUrl,
  loading,
  error,
  play,
  clear
}) => {
  return (
    <section className="section">
      <h1 className="title">Cat Game</h1>
      {renderGif({ imageUrl, loading, error })}
      <hr />
      <div className="buttons">
        <button className="button is-primary is-rounded" onClick={play}>
          Play
        </button>
        <button className="button is-rounded" onClick={clear}>
          Clear
        </button>
      </div>
    </section>
  );
};

export default CatGame;
