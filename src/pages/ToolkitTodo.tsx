import * as React from "react";
import TodoList from "../components/reduxToolkit/TodoList";
import store from "../stores/reduxToolkit";
import withReduxStore from "../hoc/withReduxStore";

const ToolkitTodo = () => {
  
  return (
   <>
      <p className="notification  has-text-primary-light has-background-info-dark">Redux Toolkit Todo</p>
      <TodoList/>
    </>
  );
};

export default withReduxStore(ToolkitTodo, store);