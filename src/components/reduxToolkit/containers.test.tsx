import * as React from "react";
import { Provider } from "react-redux";
import { render, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import store from "../../stores/reduxToolkit";
import UsersList from "../reduxToolkit/UsersList";
import CatGame from "../reduxToolkit/CatGame";

function renderWithRedux(component: React.ReactNode, store = {} as any) {
  return { ...render(<Provider store={store}>{component}</Provider>) };
}

it("renders with redux", async () => {
  renderWithRedux(<UsersList />, store);
  const elem = await waitFor(() => screen.getByTestId(3));
  expect(elem).toHaveTextContent("Clementine Bauch");
});

it("fires play and renders with redux", async () => {
  renderWithRedux(<CatGame />, store);
  userEvent.click(screen.getByText("Play"));
  const elem = await waitFor(() => screen.getByTestId("cat-game"));
  expect(elem).toBeTruthy();
});
