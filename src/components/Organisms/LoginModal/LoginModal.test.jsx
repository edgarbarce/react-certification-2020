import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import LoginModal from './index';
import AppProvider from '../../../State/Provider';
import * as loginApi from '../../../Pages/Api/login-api';

// Just to avoid eslint error in the editor
const explicitTrueValue = true;

describe('Test Login Modal Component', () => {
  // eslint-disable-next-line no-proto
  jest.spyOn(window.localStorage.__proto__, 'setItem');

  beforeEach(() => {
    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'login');
    document.body.appendChild(modalRoot);
  });

  it('both inputs are wrong', async () => {
    render(
      <AppProvider>
        <LoginModal modalOpen={explicitTrueValue} />
      </AppProvider>
    );
    const userInput = screen.getByRole('textbox');
    const passwordInput = screen.getByLabelText(/password/i);

    expect(userInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    fireEvent.change(userInput, { target: { value: 'wrongUser' } });
    fireEvent.change(passwordInput, { target: { value: 'wrongPassword' } });

    const button = screen.getByRole('button', { name: 'Login' });

    expect(button).toBeInTheDocument();

    jest.spyOn(loginApi, 'default').mockImplementation(() => Promise.reject());

    await act(async () => {
      fireEvent.click(button);
    });

    const error = screen.getByText('User or password is incorrect');
    expect(error).toBeInTheDocument();
  });
  it('user and password are correct', async () => {
    const onClose = jest.fn();
    render(
      <AppProvider>
        <LoginModal modalOpen={explicitTrueValue} onClose={onClose} />
      </AppProvider>
    );
    const userInput = screen.getByRole('textbox');
    const passwordInput = screen.getByLabelText(/password/i);

    expect(userInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    fireEvent.change(userInput, { target: { value: 'wizeline' } });
    fireEvent.change(passwordInput, { target: { value: 'Rocks!' } });

    const button = screen.getByRole('button', { name: 'Login' });

    expect(button).toBeInTheDocument();

    jest.spyOn(loginApi, 'default').mockImplementation(() => Promise.resolve());

    await act(async () => {
      fireEvent.click(button);
    });

    expect(onClose).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });
});
