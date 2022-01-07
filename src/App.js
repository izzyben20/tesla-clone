import React from 'react';
import Header from './components/Header';
import GlobalStyles from './components/GlobalStyles';
import Home from './components/Home';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyles />
        <Header />
        <Home />
      </Router>
    </Provider>
  );
};

export default App;
