import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Store } from 'redux';
import { DashboardContainer } from './components/Dashboard/DashboardContainer';
import { NavigationBar } from './components/NavigationBar/NavigationBar';
import { RootState } from './reducers/types';

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
