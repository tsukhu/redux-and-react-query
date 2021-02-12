import * as React from "react";
import UsersList from "../components/reduxToolkit/UsersList";
import CatGame from "../components/reduxToolkit/CatGame";
import store from "../stores/reduxToolkit";
import withReduxStore from "../hoc/withReduxStore";

const ReduxToolkit = () => {
  return (
    <>
      <p className="notification is-warning is-light">Redux Toolkit</p>
      <UsersList />
      <hr />
      <CatGame />
    </>
  );
};

export default withReduxStore(ReduxToolkit, store);
