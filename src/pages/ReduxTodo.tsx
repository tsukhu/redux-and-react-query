import * as React from "react";
import TodosContainer from "../containers/coreRedux/TodosContainer";
import store from "../stores/coreRedux";
import withReduxStore from "../hoc/withReduxStore";

const ReduxTodo = () => {
  return (
    <>
      <p className="notification has-text-primary-light has-background-primary-dark">
        Redux Todo
      </p>
      <TodosContainer />
    </>
  );
};

export default withReduxStore(ReduxTodo, store);
