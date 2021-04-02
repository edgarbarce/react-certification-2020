import React from 'react';
import styled from 'styled-components';

const HeaderLargeSC = styled.h1`
  color: #000;
  max-height: ${(props) => props.fixedHeight || '10px'};
`;

const HeaderLarge = (props) => (
  <HeaderLargeSC fixedHeight={props.fixedHeight}>{props.children}</HeaderLargeSC>
);

export default HeaderLarge;
