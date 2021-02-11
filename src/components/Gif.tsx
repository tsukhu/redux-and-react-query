import React from "react";
import PropTypes from "prop-types";

function Gif({ imageUrl }) {
  return (
    <figure>
      <img src={imageUrl} alt="" />
      <figcaption>
        GIFs by <a href="https://giphy.com/">GIPHY</a>
      </figcaption>
    </figure>
  );
};

Gif.propTypes = {
  imageUrl: PropTypes.string.isRequired
};

export default Gif;
