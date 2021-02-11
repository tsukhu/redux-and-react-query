import * as React from "react";
import { Provider } from "react-redux";

const withReduxStore = (WrappedComponent: any, store: any) => {
  return class extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <WrappedComponent {...this.props} />
        </Provider>
      );
    }
  };
};

export default withReduxStore;
