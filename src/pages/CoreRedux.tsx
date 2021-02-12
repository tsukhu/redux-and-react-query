import * as React from "react";
import CatGameContainer from "../containers/CatGameContainer";
import UsersContainer from "../containers/UsersContainer";
import store from "../stores/coreRedux";
import withReduxStore from "../hoc/withReduxStore";

const CoreRedux = () => {
  return (
    <>
      <p className="notification is-primary is-light">Core Redux</p>
      <UsersContainer />
      <hr />
      <CatGameContainer />
    </>
  );
};

export default withReduxStore(CoreRedux, store);
