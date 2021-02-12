# redux-and-react-query

Created with CodeSandbox

- This project showcases two redux examples that also use redux saga for async API (Core Redux)

- The same examples are reimplemented using different techniques
  1. Pure Redux + Redux Saga
  2. Redux Toolkit instead of Pure Redux (with Redux Saga)
  3. Redux Toolkit with React Query (without Redux Saga)
  4. Pure React Query
  5. Redux and Redux Toolkit complex state management comparison (Todo App)

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
  - `onlyRQ` : All state managed within the components with server state handled with `react-query`

## Findings

- While this is a small subset , here are the findings

1. `Redux Toolkit` helps to reduce the boilerplate code and make the code more effecient with OOTB `immer` and `reselect` making the code cleaner and simple to understand

2. By using React Query adds additional benefit of further reducing the code as well as bringing the all the features of `react-query`. Also we can get rid of all our `redux-saga` related code

3. The amount of global state maintaned can be further reduces with `Frontend Server State` maintained with `react-query` , making the overall code more efficient.

## Lines of Code Differences

| Technique | LOC | % Savings |
|-----------|-----|-----------|
|Pure Redux| 339 | |
|Redux Toolkit| 276| 18|
|React Query with Redux Toolkit| 212 | 37|
|Only React Query| 122| 64|
|Todo (Pure Redux)| 437 | |
|Todo (Redux Toolkit)| 306 | 29|


## Credits

Todo app is an adaption from the [redux-toolkit-comparison](https://github.com/angle943/redux-toolkit-comparison) project.