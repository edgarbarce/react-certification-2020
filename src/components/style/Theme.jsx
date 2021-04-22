import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import { AppContext } from '../../state/Provider';
import { appThemes } from './ThemesDefined';

const Theme = ({ children }) => {
  const { state } = useContext(AppContext);

  return (
    <ThemeProvider theme={appThemes[state.theme]}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
