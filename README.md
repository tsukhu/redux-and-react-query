# redux-and-react-query

Created with CodeSandbox

- This project showcases two redux examples that also use redux saga for async API (Core Redux)

- The same examples are reimplemented using different techniques
  1. Pure Redux + Redux Saga
  2. Redux Toolkit instead of Pure Redux (with Redux Saga)
  3. Redux Toolkit with React Query (without Redux Saga)
  3. Pure React Query

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
|React Query with Redux Toolkit| 212 | 46|
|Only React Query| 122| 102|
