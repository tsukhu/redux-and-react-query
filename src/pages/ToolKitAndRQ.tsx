import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import UsersListRQ from "../components/UsersListRQ";
import CatGameRQ from "../components/CatGameRQ";
import store from "../storeRQ";
import withReduxStore from "../hoc/withReduxStore";

const ReactQuery = () => {
  const queryClientRef = React.useRef();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  return (
    <QueryClientProvider client={queryClientRef.current}>
      <p className="notification is-warning is-light">Redux Toolkit</p>
      <UsersListRQ />
      <hr />
      <CatGameRQ />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default withReduxStore(ReactQuery, store);
