import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Store } from 'redux';
import { RootState } from './reducers/types';
import { DashboardContainer } from './components/Dashboard/DashboardContainer';

interface Props {
  store: Store<RootState>;
}

const App: React.FC<Props> = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" component={DashboardContainer} />
      </Router>
    </Provider>
  );
};

export default App;
