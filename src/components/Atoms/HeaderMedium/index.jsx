import React from 'react';
import styled from 'styled-components';

const HeaderMediumSC = styled.h4`
  color: #313131;
  max-height: ${(props) => props.fixedHeight || '10px'};
`;

const HeaderMedium = (props) => (
  <HeaderMediumSC fixedHeight={props.fixedHeight}>{props.children}</HeaderMediumSC>
);

export default HeaderMedium;
