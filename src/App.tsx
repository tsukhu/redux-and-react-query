import * as React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/common/Header";
import CoreRedux from "./pages/CoreRedux";
import ReduxToolkit from "./pages/ReduxToolkit";
import ToolKitAndRQ from "./pages/ToolKitAndRQ";
import ToolKitAndRTKQ from "./pages/ToolKitAndRTKQ";
import ReduxTodo from "./pages/ReduxTodo";
import ToolkitTodo from "./pages/ToolkitTodo";
import RQOnly from "./pages/RQOnly";
import NoMatch from "./pages/NoMatch";

/**
 * Main App
 */
const App: React.FC = () => {
  return (
    <div className="container is-fluid">
      <Header />
      <div className="section">
        <Switch>
          <Route path="/" exact component={CoreRedux} />
          <Route path="/toolkit" exact component={ReduxToolkit} />
          <Route path="/toolkit-rq" exact component={ToolKitAndRQ} />
          <Route path="/rq" exact component={RQOnly} />
          <Route path="/redux-todo" exact component={ReduxTodo} />
          <Route path="/toolkit-todo" exact component={ToolkitTodo} />
          <Route path="/rtkq" exact component={ToolKitAndRTKQ} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
