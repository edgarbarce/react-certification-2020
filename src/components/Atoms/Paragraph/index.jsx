import React from 'react';
import styled from 'styled-components';

const ParagraphSC = styled.p`
  font-size: ${(props) => props.fontSize || '12px'};
  color: rgba(0, 0, 0, 0.54);
  max-height: ${(props) => props.fixedHeight};
  min-height: ${(props) => props.fixedHeight};
  margin: ${(props) => props.margin || '5px 0px'};
  text-align: ${(props) => props.textAlign || 'center'};
`;

const Paragraph = (props) => (
  <ParagraphSC
    fixedHeight={props.fixedHeight}
    margin={props.margin}
    fontSize={props.fontSize}
    textAlign={props.textAlign}
  >
    {props.children}
  </ParagraphSC>
);

export default Paragraph;
