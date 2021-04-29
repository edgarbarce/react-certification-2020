import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import AppProvider from '../../../State/Provider';
import Header from './index';

describe('Test Header Component', () => {
  it('renders correctly and matches snapshot', () => {
    render(
      <AppProvider>
        <Header />
      </AppProvider>
    );
    const checkbox = screen.getByRole('checkbox');

    expect(screen.getByRole('img', { name: /Menu Icon/i })).toHaveAttribute(
      'src',
      '/menu.svg'
    );
    expect(screen.getByRole('img', { name: /Profile/i })).toHaveAttribute(
      'src',
      '/profile.svg'
    );
    expect(checkbox.checked).toEqual(false);
    expect(checkbox).toMatchInlineSnapshot(`
      <input
        class="sc-fubCfw bAbcvJ"
        data-testid="toggle"
        type="checkbox"
      />
    `);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
  });
  it('should display links and correct text when the user is logged in', () => {
    const newState = {
      isUserLoggedIn: true,
    };
    const history = createMemoryHistory();
    history.push('/');

    render(
      <AppProvider providedState={newState}>
        <Router history={history}>
          <Header />
        </Router>
      </AppProvider>
    );
    const picProfile = screen.getByRole('img', { name: /Profile/i });
    fireEvent.mouseOver(picProfile);
    expect(screen.getByText('Log Out')).toBeInTheDocument();

    const menuIcon = screen.getByRole('img', { name: /Menu Icon/i });
    fireEvent.click(menuIcon);

    expect(screen.getByRole('complementary')).toBeInTheDocument();

    const favorites = screen.getByRole('link', {
      name: 'Favorites',
    });
    const home = screen.getByRole('link', {
      name: 'Home',
    });

    expect(favorites).toBeInTheDocument();
    expect(home).toBeInTheDocument();
  });
  it('should hide favorites when user is not logged in', () => {
    const newState = {
      isUserLoggedIn: false,
    };
    const history = createMemoryHistory();
    history.push('/');

    render(
      <AppProvider providedState={newState}>
        <Router history={history}>
          <Header />
        </Router>
      </AppProvider>
    );
    const picProfile = screen.getByRole('img', { name: /Profile/i });
    fireEvent.mouseOver(picProfile);
    expect(screen.getByText('Log In')).toBeInTheDocument();

    const menuIcon = screen.getByRole('img', { name: /Menu Icon/i });
    fireEvent.click(menuIcon);

    expect(screen.getByRole('complementary')).toBeInTheDocument();

    const home = screen.getByRole('link', {
      name: 'Home',
    });

    expect(
      screen.queryByRole('link', {
        name: 'Favorites',
      })
    ).not.toBeInTheDocument();
    expect(home).toBeInTheDocument();
  });
});
