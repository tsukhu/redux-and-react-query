# redux-and-react-query

Created with CodeSandbox

- This project showcases two redux examples that also use redux saga for async API (Core Redux)

- The same examples are reimplemented using different techniques
  1. Pure Redux + Redux Saga
  2. Redux Toolkit instead of Pure Redux (with Redux Saga)
  3. Redux Toolkit with React Query (without Redux Saga)
  4. Redux Toolkit with experimental RTK Query (without Redux Sage)
  5. Pure React Query
  6. Redux and Redux Toolkit complex state management comparison (Todo App)
  

## Code Structure
  - **pages**: Page Routes for the app
  - **hoc**: Higher Order Components
  - **containers**: Redux Containers
  - **components**: React components organized by store types
  - **stores**: Store code organized by store types
  - **api**: API helpers

### Store Type Folders

  - `coreRedux` : Traditional Redux Code + Saga
  - `reduxtToolkit` : Redux Toolkit Based Store + Saga
  - `toolkitWithRQ` : Redux as the global store with `react-query` for handling the FE server state
  - `toolkitWithRTKQ` : Redux as the global store with `Redux Toolkit Query` for handling the FE server state
  - `onlyRQ` : All state managed within the components with server state handled with `react-query`

## Testing

  - Focus is on testing the application and features rather than the implementation details.
  - This is where the `testing-library` comes in and helped achieve this.
  - Also as Kent C Dodds mentions in his [blog](https://kentcdodds.com/blog/write-tests) where the focus should be more on the integration level tests where we get the most confidence on the application , rather than focusing on areas which are known to work (like action creators or low level implementation of the state management). Test these at the application level.
  - To compliment this also adding in the project is `msw` or Mock Service Worker [https://mswjs.io/](https://mswjs.io/) , so that we mock the APIs at the network level rather than changing the internal implemention of client API libraries. This will ensure the test and the actual application code are being tested under the same configuration and code without any extra testing intercepts and the client API level.
  

## Setup

```
yarn
```

## Run the App

```
yarn start
```

## Run the tests

```
yarn test
```

## Findings

- While this is a small subset , here are the findings

1. `Redux Toolkit` helps to reduce the boilerplate code and make the code more effecient with OOTB `immer` and `reselect` making the code cleaner and simple to understand

2. By using React Query adds additional benefit of further reducing the code as well as bringing the all the features of `react-query`. Also we can get rid of all our `redux-saga` related code. There are advanced features from `react-query` like `pre-fetching` ,`depended queries` , `parrallel queries` , `background fetching indicators` that can also be leveraged for more advanced use cases.

3. The amount of global state maintaned can be further reduces with `Frontend Server State` maintained with `react-query` , making the overall code more efficient.

4. RTK Query once integrated (and a product release is available) with RTK is likely to be become a defacto standard for async , `Frontend Server State` if redux is being as part of the application.

## Lines of Code Differences

| Technique | LOC | % Savings |
|-----------|-----|-----------|
|Pure Redux| 339 | |
|Redux Toolkit| 276| 18|
|React Query with Redux Toolkit| 212 | 37|
|Redux Toolkit with RTK Query| 231 | 31|
|Only React Query| 122| 64|
|Todo (Pure Redux)| 437 | |
|Todo (Redux Toolkit)| 306 | 29|


## Credits

Todo app is an adaption from the [redux-toolkit-comparison](https://github.com/angle943/redux-toolkit-comparison) project.