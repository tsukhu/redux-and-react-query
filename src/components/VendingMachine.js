import React from "react";
import PropTypes from "prop-types";
import Gif from "./Gif";

function VendingMachine({ imageUrl, loading, error, play, clear }) {
  return (
    <div>
      <h1 className="title">猫GIFガチャ</h1>
      {renderGif({ imageUrl, loading, error })}
      <hr/>
      <div className="buttons">
        <button
          className="button is-primary is-rounded"
          onClick={play}
        >Play</button>
        <button
          className="button is-rounded"
          onClick={clear}
        >Clear</button>
      </div>
    </div>
  );
}

function renderGif({ imageUrl, loading, error }) {
  if (error) {
    return <p className="notification is-danger">Error!!</p>;
  }

  if (loading) {
    return <p className="notification is-info">Loading...</p>;
  }

  return imageUrl
    ? <Gif imageUrl={imageUrl} />
    : <p className="notification">Welcome!</p>;
};

VendingMachine.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  play: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired
};

export default VendingMachine;
