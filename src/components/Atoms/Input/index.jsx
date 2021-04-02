import React from 'react';
import styled from 'styled-components';

const InputStyle = styled.input`
  color: white;
  font-size: 16px;
  margin: 0px 15px;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 10px;
  padding: 15px;
  height: 25px;
  width: 300px;
  @media (max-width: 768px) {
    width: 150px;
  }
  &:focus {
    outline: none;
  }
`;

const Input = (props) => (
  <InputStyle
    placeholder={props.placeholder}
    type={props.type}
    onChange={props.onchange}
    name={props.name}
  />
);

export default Input;
