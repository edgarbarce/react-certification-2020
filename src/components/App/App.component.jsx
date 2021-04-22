import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/Home/Home.page';
import Header from '../Organisms/Header/index';
import Layout from '../Atoms/Layout/index';

import AppProvider from '../../state/Provider';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Header />
        <Layout>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch>
        </Layout>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
