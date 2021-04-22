import React from 'react';
import styled from 'styled-components';

const DivSC = styled.div`
  max-width: ${(props) => props.maxWidth || '100px'};
  min-width: ${(props) => props.maxWidth || '100px'};
`;

const Div = (props) => (
  <DivSC maxWidth={props.maxWidth} data-testid="divTest">
    {props.children}
  </DivSC>
);

export default Div;
