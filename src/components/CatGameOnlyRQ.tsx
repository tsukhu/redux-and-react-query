import * as React from "react";
import Gif from "./Gif";
import { useQuery } from "react-query";
import gifApi from "../api/gif";

function renderGif({ data, isFetching, error }) {
  if (error) {
    return <p className="notification is-danger">Error!!</p>;
  }

  if (isFetching) {
    return <p className="notification is-info">Loading...</p>;
  }

  return data && data.url ? (
    <Gif imageUrl={data.url} />
  ) : (
    <p className="notification">Welcome to the cat game!</p>
  );
}

const CatGameRQ: React.FC<any> = () => {
  const [play, setPlay] = React.useState(false);
  const [clear, setClear] = React.useState(false);
  const { data, error, isFetching } = useQuery(
    ["gifs"],
    async () => await gifApi.random(),
    {
      enabled: !!play
    }
  );

  React.useEffect(() => {
    if (data) {
      setPlay(false);
    }
  }, [data]);

  return (
    <section className="section">
      <h1 className="title">Cat Game</h1>
      {!clear && renderGif({ data, isFetching, error })}
      <hr />
      <div className="buttons">
        <button
          className="button is-primary is-rounded"
          onClick={() => {
            setPlay(true);
            setClear(false);
          }}
        >
          Play
        </button>
        <button className="button is-rounded" onClick={() => setClear(true)}>
          Clear
        </button>
      </div>
    </section>
  );
};

export default CatGameRQ;
