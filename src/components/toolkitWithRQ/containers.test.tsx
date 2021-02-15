import * as React from "react";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { render, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import store from "../../stores/toolkitWithRQ";
import UsersList from "../toolkitWithRQ/UsersList";
import CatGame from "../toolkitWithRQ/CatGame";

const queryClient = new QueryClient();

function renderWithReduxAndRQ(component: React.ReactNode, store = {} as any) {
  return {
    ...render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          {component}
        </QueryClientProvider>
      </Provider>
    ),
  };
}

it("renders with redux", async () => {
  renderWithReduxAndRQ(<UsersList />, store);
  const elem = await waitFor(() => screen.getByTestId(3));
  expect(elem).toHaveTextContent("Clementine Bauch");
});

it("fires play and renders with react-query", async () => {
  renderWithReduxAndRQ(<CatGame />, store);
  userEvent.click(screen.getByText("Play"));
  const elem = await waitFor(() => screen.getByTestId("cat-game"));
  expect(elem).toBeTruthy();
});
