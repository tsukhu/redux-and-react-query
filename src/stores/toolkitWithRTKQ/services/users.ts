import { createApi, fetchBaseQuery } from "@rtk-incubator/rtk-query";

// Define a service using a base URL and expected endpoints
export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_USERS_API_URL}`,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "",
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUsersQuery } = usersApi;
