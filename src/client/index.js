import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import TransactionPage from './components/transactions';
import reducers from './reducers';
import Transfer from './components/transfer';
import SideBar from './components/sidebar';
import './app.css';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <SideBar />
        <Switch>
          <Route path="/transfer" component={Transfer} />
          <Route path="/transactions" component={TransactionPage} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));