import React, { useContext } from 'react';
import { render, screen } from '@testing-library/react';
import AppProvider, { AppContext } from './Provider';

const Child = () => {
  const { state } = useContext(AppContext);
  return (
    <div>
      <h1>{state.searchWord}</h1>
      <h2>{state.searchMode ? 'Search On' : 'Search Off'}</h2>
      <h3>{state.propsSelectedVideo.title ? state.propsSelectedVideo.title : null}</h3>
    </div>
  );
};

describe('Test Provider', () => {
  it('The Children access to the App Context and get inital state correctly', () => {
    render(
      <AppProvider>
        <Child />
      </AppProvider>
    );
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/^Wizeline$/);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/^Search On$/);
    expect(screen.getByRole('heading', { level: 3 })).toBeEmptyDOMElement();
  });
});
