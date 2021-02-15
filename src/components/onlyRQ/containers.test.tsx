import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { render, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UsersList from "../onlyRQ/UsersList";
import CatGame from "../onlyRQ/CatGame";

const queryClient = new QueryClient();

function renderWithRQ(component: React.ReactNode) {
  return {
    ...render(
      <QueryClientProvider client={queryClient}>
        {component}
      </QueryClientProvider>
    ),
  };
}

it("renders with redux", async () => {
  renderWithRQ(<UsersList />);
  const elem = await waitFor(() => screen.getByTestId(3));
  expect(elem).toHaveTextContent("Clementine Bauch");
});

it("fires play and renders with react-query", async () => {
  renderWithRQ(<CatGame />);
  userEvent.click(screen.getByText("Play"));
  const elem = await waitFor(() => screen.getByTestId("cat-game"));
  expect(elem).toBeTruthy();
});
