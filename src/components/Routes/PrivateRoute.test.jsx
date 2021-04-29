import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import PrivateRoute from './PrivateRoute';
import Hamburguer from '../Atoms/Hamburguer';
import Pic from '../Atoms/Pic';
import * as useLogin from '../../Hooks/useLogin';

describe('Test Private Route', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('when user is logged in the component is rendered', () => {
    const spy = jest.spyOn(useLogin, 'default');
    spy.mockReturnValue({
      user: { id: 'testId', name: 'test' },
    });
    const history = createMemoryHistory();
    history.push('/test');
    render(
      <Router history={history}>
        <PrivateRoute component={Hamburguer} />
      </Router>
    );
    expect(screen.getByRole('img', { name: /Menu Icon/i })).toHaveAttribute(
      'src',
      '/menu.svg'
    );
  });
  it('when user is NOT logged in should not see the Hamburguer and instead will see the defaut Profile Pic', () => {
    const spy = jest.spyOn(useLogin, 'default');
    spy.mockReturnValue({
      user: { id: 'testId', name: 'test' },
    });
    const history = createMemoryHistory();
    history.push('/loggedIn');
    render(
      <Router history={history}>
        <Route path="/" component={Pic} />
        <PrivateRoute path="/loggedIn" component={Hamburguer} />
      </Router>
    );
    expect(screen.getByRole('img', { name: /Menu Icon/i })).toHaveAttribute(
      'src',
      '/menu.svg'
    );
  });
});
