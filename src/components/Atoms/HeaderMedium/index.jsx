import React from 'react';
import styled from 'styled-components';

const HeaderMediumSC = styled.h3`
  color: #313131;
  max-height: ${(props) => props.fixedHeight || '10px'};
  font-weight: ${(props) => props.fontWeight || '700'};
  text-align: ${(props) => props.textAlign || 'center'};
  margin: ${(props) => props.margin || '2px 5px'};
`;

const HeaderMedium = (props) => (
  <HeaderMediumSC
    fixedHeight={props.fixedHeight}
    fontWeight={props.fontWeight}
    textAlign={props.textAlign}
    marign={props.margin}
  >
    {props.children}
  </HeaderMediumSC>
);

export default HeaderMedium;
