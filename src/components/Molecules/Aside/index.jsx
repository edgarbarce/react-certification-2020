import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AppContext } from '../../../State/Provider';

const StyledLink = styled(Link)`
  font-size: 20px;
  text-decoration: none;
  color: white;
`;

const LinkWrapper = styled.div`
  display: inline-block;
  width: 100%;
  border-bottom: 1px solid white;
  margin: 8px 0px;
  padding: 10px;
`;

const AsideSC = styled.aside`
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.aside};
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 8px;
`;

const ClosebtnSC = styled.span`
  float: right;
  font-size: 32px;
  font-weight: 800;
  padding: 8px;
  cursor: pointer;
  margin-bottom: 25px;
`;

function Aside({ visible, toggleAside }) {
  const { state } = useContext(AppContext);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(state.isUserLoggedIn);
  }, [state.isUserLoggedIn]);

  if (!visible) return null;

  return (
    <AsideSC>
      <ClosebtnSC onClick={toggleAside} aria-hidden="true">
        X
      </ClosebtnSC>

      <LinkWrapper>
        <StyledLink onClick={toggleAside} to="/">
          Home
        </StyledLink>
      </LinkWrapper>
      {loggedIn && (
        <LinkWrapper>
          <StyledLink onClick={toggleAside} to="/Favorites">
            Favorites
          </StyledLink>
        </LinkWrapper>
      )}
    </AsideSC>
  );
}

export default Aside;
