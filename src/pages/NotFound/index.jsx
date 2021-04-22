import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HeaderLarge from '../../components/Atoms/HeaderLarge';

const Img = styled.img`
  margin-top: 20px;
`;

const StyledLink = styled(Link)`
  font-size: 20px;
  text-decoration: none;
  color: black;
  display: block;
  margin-top: 20px;
`;

function NotFoundPage() {
  return (
    <section className="not-found">
      <HeaderLarge>Oh oh! It seems that you are lost</HeaderLarge>
      <Img src="404.gif" alt="page not found" />
      <StyledLink to="/" className="home-link">
        Click here to go back to Home!
      </StyledLink>
    </section>
  );
}

export default NotFoundPage;
