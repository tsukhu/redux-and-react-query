import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import UsersListOnlyRQ from "../components/UsersListOnlyRQ";
import CatGameOnlyRQ from "../components/CatGameOnlyRQ";

const ReactQueryOnly = () => {
  const queryClientRef = React.useRef();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  return (
    <QueryClientProvider client={queryClientRef.current}>
      <p className="notification is-primary is-light">Redux Toolkit</p>
      <UsersListOnlyRQ />
      <hr />
      <CatGameOnlyRQ />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default ReactQueryOnly;
