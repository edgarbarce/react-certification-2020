import React from 'react';
import styled from 'styled-components';

const ParagraphSC = styled.p`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
  max-height: ${(props) => props.fixedHeight || '10px'};
  min-height: ${(props) => props.fixedHeight || '10px'};
`;

const Paragraph = (props) => (
  <ParagraphSC fixedHeight={props.fixedHeight}>{props.children}</ParagraphSC>
);

export default Paragraph;
