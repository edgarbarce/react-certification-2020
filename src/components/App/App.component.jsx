import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/Home/Home.page';
import Header from '../Organisms/Header/index';
import Layout from '../Atoms/Layout/index';
import AppProvider from '../../state/Provider';
import Theme from '../style/Theme';

function App() {
  return (
    <AppProvider>
      <Theme>
        <BrowserRouter>
          <Header />
          <Layout>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
            </Switch>
          </Layout>
        </BrowserRouter>
      </Theme>
    </AppProvider>
  );
}

export default App;
