import * as React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import CoreRedux from "./pages/CoreRedux";
import ReduxToolkit from "./pages/ReduxToolkit";
import ToolKitAndRQ from "./pages/ToolKitAndRQ";
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
          <Route component={NoMatch} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
