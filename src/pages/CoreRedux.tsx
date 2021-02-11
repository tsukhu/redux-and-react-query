import * as React from "react";
import CatGameContainer from "../containers/CatGameContainer";
import UsersContainer from "../containers/UsersContainer";
const CoreRedux = () => {
  return (
    <>
      <p className="notification is-primary is-light">Core Redux</p>
      <UsersContainer />
      <CatGameContainer />
    </>
  );
};

export default CoreRedux;
