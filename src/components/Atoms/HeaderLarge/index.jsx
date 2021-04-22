import React from 'react';
import styled from 'styled-components';

const HeaderLargeSC = styled.h1`
  max-height: ${(props) => props.fixedHeight};
  margin: ${(props) => props.margin || '10px 5px'};
  text-align: ${(props) => props.textAlign || 'center'};
`;

const HeaderLarge = (props) => (
  <HeaderLargeSC
    fixedHeight={props.fixedHeight}
    textAlign={props.textAlign}
    margin={props.margin}
  >
    {props.children}
  </HeaderLargeSC>
);

export default HeaderLarge;
