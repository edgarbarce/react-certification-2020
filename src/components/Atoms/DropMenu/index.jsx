import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { AppContext } from '../../../State/Provider';

const Content = styled.div`
  position: absolute;
  background-color: #f7f7f7;
  min-width: 140px;
  left: -72px;
  text-align: center;
  z-index: 1;
  border-radius: 15px;
`;

const ListUl = styled.ul`
  list-style-type: none;
  text-align: center;
  padding: 0px;
`;

const ListElement = styled.li`
  position: relative;
  display: inline-block;
  cursor: pointer;
  width: 100%;
`;

const DropMenu = ({ loggedIn, setModalOpen }) => {
  const history = useHistory();
  const { dispatch } = useContext(AppContext);

  const logOut = () => {
    localStorage.removeItem('USER');
    dispatch({
      type: 'SET_USER_LOGGED_OUT',
    });
    history.push('/');
  };

  return (
    <Content>
      <ListUl>
        {loggedIn ? (
          <ListElement aria-hidden="true" onClick={logOut}>
            Log Out
          </ListElement>
        ) : (
          <ListElement aria-hidden="true" onClick={() => setModalOpen(true)}>
            Log In
          </ListElement>
        )}
      </ListUl>
    </Content>
  );
};

export default DropMenu;
