import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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
});
