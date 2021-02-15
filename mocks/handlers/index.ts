// src/mocks/handlers.js
import { rest } from "msw";
import users from "../data/users.json";
export const handlers = [
  // Handles a GET /gif request
  rest.get(`${process.env.REACT_APP_GIF_API_URL}`, (_req, res, ctx) => {
    return res(
      ctx.json({
        url: "https://media.giphy.com/media/Is0AJv4CEj9hm/giphy.gif",
      })
    );
  }),
  // Handles a GET /users request
  rest.get(`${process.env.REACT_APP_USERS_API_URL}`, (_req, res, ctx) => {
    return res(ctx.json(users));
  }),
];
