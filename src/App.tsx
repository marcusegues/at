import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Store } from 'redux';
import { DashboardContainer } from './components/Dashboard/DashboardContainer';
import { RootState } from './reducers/types';
import { NavigationBar } from './components/NavigationBar/NavigationBar';

interface Props {
  store: Store<RootState>;
}

const App: React.FC<Props> = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <NavigationBar />
        <Route path="/" component={DashboardContainer} />
      </Router>
    </Provider>
  );
};

export default App;
