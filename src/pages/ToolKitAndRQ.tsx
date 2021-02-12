import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import UsersList from "../components/toolkitWithRQ/UsersList";
import CatGame from "../components/toolkitWithRQ/CatGame";
import store from "../stores/toolkitWithRQ";
import withReduxStore from "../hoc/withReduxStore";

const ReactQuery = () => {
  const queryClientRef: any = React.useRef();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  return (
    <QueryClientProvider client={queryClientRef.current}>
      <p className="notification is-warning is-light">Redux Toolkit</p>
      <UsersList />
      <hr />
      <CatGame />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default withReduxStore(ReactQuery, store);
