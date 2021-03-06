import * as React from "react";

interface GifProps {
  imageUrl: string;
}

const Gif: React.FC<GifProps> = ({ imageUrl }) => {
  return (
    <figure data-testid="cat-game">
      <img src={imageUrl} alt="" />
      <figcaption>
        GIFs by <a href="https://giphy.com/">GIPHY</a>
      </figcaption>
    </figure>
  );
};

export default Gif;
