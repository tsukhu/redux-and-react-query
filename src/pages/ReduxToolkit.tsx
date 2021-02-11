import * as React from "react";
import UsersListTK from "../components/UsersListTK";
import CatGameTK from "../components/CatGameTK";
import store from "../storeTK";
import withReduxStore from "../hoc/withReduxStore";

const ReduxToolkit = () => {
  return (
    <>
      <p className="notification is-warning is-light">Redux Toolkit</p>
      <UsersListTK />
      <hr />
      <CatGameTK />
    </>
  );
};

export default withReduxStore(ReduxToolkit, store);
