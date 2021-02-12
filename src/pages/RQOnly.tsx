import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import UsersList from "../components/onlyRQ/UsersList";
import CatGame from "../components/onlyRQ/CatGame";

const ReactQueryOnly = () => {
  const queryClientRef: any = React.useRef();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  return (
    <QueryClientProvider client={queryClientRef.current}>
      <p className="notification is-primary is-light">Redux Toolkit</p>
      <UsersList />
      <hr />
      <CatGame />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default ReactQueryOnly;
