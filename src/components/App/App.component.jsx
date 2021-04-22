import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../../Pages/Home/Home.page';
import Header from '../Organisms/Header/index';
import Layout from '../Atoms/Layout/index';
import AppProvider from '../../State/Provider';
import Theme from '../Style/Theme';
import VideoDetails from '../Templates/VideoDetails';
import PrivateRoute from '../Routes/PrivateRoute';
import Favorites from '../../Pages/Favorites/Favorites.page';
import FavoriteDetails from '../Templates/FavoriteDetails';
import NotFoundPage from '../../Pages/NotFound';

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
              <PrivateRoute exact path="/Favorites" component={Favorites} />
              <PrivateRoute exact path="/Favorites/:id" component={FavoriteDetails} />
              <Route exact path="/video/:id" component={VideoDetails} />
              <Route path="*" component={NotFoundPage} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </Theme>
    </AppProvider>
  );
}

export default App;
