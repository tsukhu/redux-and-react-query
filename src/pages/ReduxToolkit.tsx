import * as React from "react";
import CatGameContainer from "../containers/CatGameContainer";
import UsersContainer from "../containers/UsersContainer";
const CoreReduxToolkit = () => {
  return (
    <>
      <p className="notification is-warning is-light">Redux Toolkit</p>
      <UsersContainer />
      <CatGameContainer />
    </>
  );
};

export default CoreReduxToolkit;
