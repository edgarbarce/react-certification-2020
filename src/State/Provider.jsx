import React, { createContext, useReducer } from 'react';
import reducer from './Reducer';
import { getFavoriteVideos, getTheme } from '../Utils/LocalStorageUtils';

const initState = {
  searchMode: true,
  searchWord: 'Wizeline',
  propsSelectedVideo: {},
  theme: getTheme(),
  isUserLoggedIn: !!localStorage.getItem('USER'),
  favoriteVideos: getFavoriteVideos(),
};

const AppContext = createContext(initState);

function AppProvider({ children, providedState }) {
  const initialState = providedState || initState;
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
  );
}

export { AppContext };
export default AppProvider;
