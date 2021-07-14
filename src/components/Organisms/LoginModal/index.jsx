import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import HeaderLarge from '../../Atoms/HeaderLarge';
import loginApi from '../../../Pages/Api/login-api';
import { AppContext } from '../../../State/Provider';
import Paragraph from '../../Atoms/Paragraph';

const LoginDiv = styled.div`
  background: ${({ theme }) => theme.navbar};
  color: white;
  position: fixed;
  min-width: 30%;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  padding: 40px;
  border-radius: 10px;
`;

const FormInput = styled.input`
  display: block;
  border-radius: 5px;
  border: none;
  width: 100%;
  color: white;
  height: 30px;
  padding: 10px;
  background: #ffffff4f;
  border: 1px solid white;
`;

const Form = styled.form``;

const FormuBtn = styled.button`
  font-size: 16px;
  padding: 10px;
  min-width: 90px;
  border: none;
  background: #e3363d;
  color: white;
  box-shadow: 4px 5px 6px 0 rgb(0 0 0 / 71%);
  margin-top: 15px;
`;

const FormLabel = styled.label`
  display: block;
`;

const ErrorNotification = styled.div`
  color: white;
  background: #e3363d;
  height: 50px;
  text-align: center;
  padding: 9px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(115, 115, 115, 0.6);
  z-index: 99;
`;

const FormDivGroup = styled.div`
  margin: 30px 0px;
`;

const ClosebtnSC = styled.span`
  float: right;
  font-size: 32px;
  font-weight: 800;
  padding: 8px;
  cursor: pointer;
  margin-top: -25px;
`;

function LoginModal({ modalOpen, onClose }) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [wrongData, setWrongData] = useState(false);
  const { dispatch } = useContext(AppContext);

  async function handleSubmit(event) {
    event.preventDefault();
    setWrongData(false);
    try {
      const dataUser = await loginApi(userName, password);
      localStorage.setItem('USER', JSON.stringify(dataUser));
      const localVideos = localStorage.getItem('USER-VIDEOS');
      const favorites =
        localVideos !== null ? JSON.parse(localVideos).favoriteVideos : [];
      onClose(!modalOpen);
      dispatch({
        type: 'SET_USER_LOGGED_IN',
        payload: {
          isUserLoggedIn: true,
          favoriteVideos: favorites,
        },
      });
    } catch (e) {
      console.log(e);
      setWrongData(true);
    }
    setUserName('');
    setPassword('');
  }

  if (!modalOpen) return null;

  return ReactDOM.createPortal(
    <>
      <Overlay />
      <LoginDiv className="Login">
        <ClosebtnSC onClick={() => onClose(!modalOpen)} aria-hidden="true">
          X
        </ClosebtnSC>
        <HeaderLarge>Login</HeaderLarge>
        {wrongData && (
          <ErrorNotification>
            <Paragraph fontSize="15px">User or password is incorrect</Paragraph>
          </ErrorNotification>
        )}
        <Form onSubmit={handleSubmit}>
          <FormDivGroup>
            <FormLabel>User</FormLabel>
            <FormInput
              required
              type="text"
              name="user"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </FormDivGroup>
          <FormDivGroup>
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormInput
              required
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormDivGroup>
          <FormuBtn type="submit">Login</FormuBtn>
        </Form>
      </LoginDiv>
    </>,
    document.getElementById('login')
  );
}

export default LoginModal;
