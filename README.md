## Observations for the code reviewer
I would like to leave some observations about the app implementation for the code reviewer. This task was great for showcasing all the JavaScript heavy machinery that we can apply to even simple tasks to make an app performant, type-safe, and well-tested.

### Performance
* I have optimised render performance of the React components. This means:
  * Since I am using mostly functional components, I memoize their results using React.memo (equivalent to using PureComponent for class components)
  * I am using memoized selectors (using Reselect), to further avoid re-renders that start in connected components
  * As you likely know, you can check this by opening Chrome devtools, under React devtools, and selecting "Highlight Updates" after clicking the settings cog icon. Type into the input fields and check that there are no wasted renders.
  
### Immutable Data Structures
  * I am using Immer.js for updating state in components and redux store, and fast comparisons of deeply nested objects
  * I've always used Immutable.js, but wanted to try this library, and I like it very much.
  
### Async flows and side effects
  * I am using redux-saga (instead of redux-thunk which I am also very familiar with) because they are relatively straightforward to test

### Tests
  * I prioritised breadth of types of tests rather than coverage (not enough time to have full coverage). For example, I tested one of the sagas, not all of them, because testing the latter is analogous to testing the one.
  
#### Unit tests
* **Component helper functions**: in particular `isNewOrderValid` is a crucial function used by the UI to validate whether an order is valid to be submitted or not. 
* **Reducers**: I only tested the `currencyPairs` reducer, because all the others are done analogously.
* **Sagas**: 
  * I tested submission of market and limit orders through the `submitNewOrderSaga`
  * I am mocking the relevant modules, and am running the entire saga in each test and testing the effects, as is recommended (instead of manually iterating over the generator functions).
#### Integration Tests
* I wrote one Enzyme test for the Dashboard, using a shallow render. Please note the following comment that I also left in the code: This test should actually be implemented using Enzyme's mount or react-test-renderer create, however ag-grid presents some issues in use with Jest (tracked in their repo) that need workarounds, and I am not implementing these workarounds. This test is not ideal because I am mocking what the connected component would get from react-redux, which is defined in the component itself: this represents a decoupling between implementation and tests which should definitely be solved when the ag-grid workarounds are in place and mount is used instead of shallow.
#### End-to-end Tests
* I wrote one E2E test using Cypress
* I test submission of market and limit orders
* I check if localStorage is actually updated on reload
#### Snapshot Tests
* I wrote one snapshot test for the Dashboard component. I am simply shallow rendering through Enzyme, and using it as a snapshot.

**Finally,**
* I am using styled-components to have modular styles: the fundamental unit of reuse and styling is the component
* Please note the use of TypeScript: all files are typed
* My devtools are: prettier, tslint, React and Redux devtools. 
* I am using ag-grid for the table, and Ant Design for the components (Buttons)
* State management is Redux

## Running the project
In the project directory, you can run:

### `yarn install`
 
 To install dependencies.

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode, runs all tests.<br>

### `yarn cypress:open`

Launches the Cypress Test Runner. Select `dashboard.spec.ts` to run the E2E tests in a browser window.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
