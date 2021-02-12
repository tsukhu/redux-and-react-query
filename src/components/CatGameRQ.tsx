import * as React from "react";
import Gif from "./Gif";
import { useQuery } from "react-query";
import { useSelector, useDispatch } from "react-redux";
import { clear, selectGif, setGif } from "../storeRQ/features/gif/reducers";
import gifApi from "../api/gif";

function renderGif({ imageUrl, isFetching, error }: {imageUrl: string, isFetching: boolean, error: any}) {
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

  const { data, error, isFetching, refetch } = useQuery(
    ["gifs"],
    async () => await gifApi.random(),
    {
      enabled: !!play
    }
  );

  React.useEffect(() => {
    if (data) {
      console.log(data);
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
          onClick={() => setPlay(true)}
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

export default CatGameRQ;
