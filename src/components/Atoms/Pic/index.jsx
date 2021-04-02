import React from 'react';
import styled from 'styled-components';

const IconLogin = styled.img`
  color: black;
  filter: invert(1);
  height: 40px;
  width: 40px;
  margin: 0px 15px;
  cursor: pointer;
`;

const Pic = ({ imgSrc }) => <IconLogin src={imgSrc || '/profile.svg'} alt="Profile" />;

export default Pic;
