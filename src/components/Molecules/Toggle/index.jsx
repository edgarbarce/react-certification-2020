import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../../State/Provider';

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
    width: 27px;
    height: 27px;
    border-radius: 100%;
    background-color: #e3363d;
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
  margin: 0px 10px;
  cursor: pointer;
  & ${Input}:checked {
    background-color: #000;
    cursor: pointer;
  }
  & ${Input} {
    opacity: 0;
  }
`;

const Toggle = () => {
  const { state, dispatch } = useContext(AppContext);
  const [isChecked, setIsChecked] = useState(state.theme === 'dark');

  useEffect(() => {
    dispatch({
      type: 'SET_THEME',
      payload: {
        theme: isChecked ? 'dark' : 'light',
      },
    });
  }, [dispatch, isChecked]);

  return (
    <ToggleSC>
      <Input
        data-testid="toggle"
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <Slider />
    </ToggleSC>
  );
};

export default Toggle;
