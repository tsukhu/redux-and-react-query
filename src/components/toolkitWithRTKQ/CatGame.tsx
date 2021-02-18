import * as React from "react";
import Gif from "../common/Gif";
import { useGetNextGifQuery } from "../../stores/toolkitWithRTKQ/services/gif";
import { useSelector, useDispatch } from "react-redux";
import {
  clear,
  selectGif,
  setGif,
} from "../../stores/toolkitWithRTKQ/features/gif/reducers";

function renderGif({
  imageUrl,
  isFetching,
  error,
}: {
  imageUrl: string;
  isFetching: boolean;
  error: any;
}) {
  if (error) {
    return <p className="notification is-danger">Error!!</p>;
  }

  if (isFetching) {
    return <p className="notification is-info">Loading...</p>;
  }

  return imageUrl ? (
    <Gif imageUrl={imageUrl} />
  ) : (
    <p className="notification">Welcome to the cat game!</p>
  );
}

const CatGameRQ: React.FC<any> = () => {
  const imageUrl = useSelector(selectGif);
  const dispatch = useDispatch();
  const [play, setPlay] = React.useState(false);

  const { data, error, isFetching, refetch } = useGetNextGifQuery({});

  React.useEffect(() => {
    if (data) {
      dispatch(setGif(data.url));
      setPlay(false);
    }
  }, [data]);

  return (
    <section className="section">
      <h1 className="title">Cat Game</h1>
      {renderGif({ imageUrl, isFetching, error })}
      <hr />
      <div className="buttons">
        <button
          className="button is-primary is-rounded"
          onClick={() => {
            setPlay(true);
            refetch();
          }}
        >
          Play
        </button>
        <button
          className="button is-rounded"
          onClick={() => dispatch(clear())}
          disabled={play}
        >
          Clear
        </button>
      </div>
    </section>
  );
};

export default CatGameRQ;
