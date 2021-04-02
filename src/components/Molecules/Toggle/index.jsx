import React, { useState } from 'react';
import styled from 'styled-components';

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  left: 0;
  top: -5px;
  background-color: #e3e3e3;
  border-radius: 15px;
  transition: 0.4s;

  &:before {
    content: '';
    width: 25px;
    height: 25px;
    border-radius: 100%;
    background-color: #589635;
    transition: 0.5s;
    position: absolute;
  }
`;

const Input = styled.input`
  &:checked + ${Slider}:before {
    transform: translateX(27px);
    cursor: pointer;
  }
`;

const ToggleSC = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 15px;
  background-color: #e3e3e3;
  border-radius: 15px;
  transition: 0.4s;
  margin: 0px 15px;
  cursor: pointer;
  & ${Input}:checked {
    background-color: #000;
    cursor: pointer;
  }
  & ${Input} {
    opacity: 0;
  }
`;

const Toggle = ({ isChecked = true }) => {
  const [checked, setChecked] = useState(isChecked);

  return (
    <ToggleSC>
      <Input type="checkbox" defaultChecked={isChecked} />
      <Slider onClick={() => setChecked(!checked)} />
    </ToggleSC>
  );
};

export default Toggle;
