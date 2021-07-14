import React from 'react';
import styled from 'styled-components';

const ImgMenuBtn = styled.img`
  color: black;
  filter: invert(1);
  margin: 0px 15px;
  cursor: pointer;
`;

const Hamburguer = ({ toggleAside }) => (
  <ImgMenuBtn onClick={toggleAside} src="/menu.svg" alt="Menu Icon" />
);

export default Hamburguer;
