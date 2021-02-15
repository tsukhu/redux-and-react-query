import * as React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { render, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import reducers from "../../stores/coreRedux/reducers";
import rootSaga from "../../stores/coreRedux/sagas";
import UsersContainer from "./UsersContainer";
import CatGameContainer from "./CatGameContainer";
const sagaMiddleware = createSagaMiddleware();

function renderWithRedux(
  component: React.ReactNode,
  {
    initialState,
    store = createStore(
      reducers,
      initialState,
      applyMiddleware(sagaMiddleware)
    ),
  } = {} as any
) {
  sagaMiddleware.run(rootSaga);
  return { ...render(<Provider store={store}>{component}</Provider>) };
}

it("renders with redux", async () => {
  renderWithRedux(<UsersContainer />);
  const elem = await waitFor(() => screen.getByTestId(3));
  expect(elem).toHaveTextContent("Clementine Bauch");
});

it("fires play and renders with redux", async () => {
  renderWithRedux(<CatGameContainer />);
  userEvent.click(screen.getByText("Play"));
  const elem = await waitFor(() => screen.getByTestId("cat-game"));
  expect(elem).toBeTruthy();
});
