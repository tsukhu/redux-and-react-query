import * as React from "react";
import UsersList from "../components/toolkitWithRTKQ/UsersList";
import CatGame from "../components/toolkitWithRTKQ/CatGame";
import store from "../stores/toolkitWithRTKQ";
import withReduxStore from "../hoc/withReduxStore";

const ToolkitWithRTKQ = () => {
  return (
    <>
      <p className="notification is-warning is-light">Redux Toolkit</p>
      <UsersList />
      <hr />
      <CatGame />
    </>
  );
};

export default withReduxStore(ToolkitWithRTKQ, store);
