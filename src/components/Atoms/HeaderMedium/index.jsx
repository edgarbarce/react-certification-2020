import React from 'react';
import styled from 'styled-components';

const HeaderMediumSC = styled.h3`
  max-height: ${(props) => props.fixedHeight};
  font-weight: ${(props) => props.fontWeight || '700'};
  text-align: ${(props) => props.textAlign || 'center'};
  margin: ${(props) => props.margin || '2px 5px'};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
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
