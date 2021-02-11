import * as React from "react";
import CatGameContainer from "../containers/CatGameContainer";
import UsersContainer from "../containers/UsersContainer";
const ToolKitAndRQ = () => {
  return (
    <>
      <p className="notification is-success is-light">Toolkit & React Query</p>
      <UsersContainer />
      <CatGameContainer />
    </>
  );
};

export default ToolKitAndRQ;
