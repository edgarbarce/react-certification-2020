import React, { createContext, useReducer } from 'react';
import reducer from './Reducer';

const initState = {
  searchMode: true,
  searchWord: 'Wizeline',
  propsSelectedVideo: {},
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
