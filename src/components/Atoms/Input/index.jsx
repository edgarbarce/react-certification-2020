import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../../state/Provider';

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

function Input(props) {
  const [textValue, setTextValue] = useState('');
  const { state, dispatch } = useContext(AppContext);
  const searchVideo = (event) => {
    if (event.key === 'Enter') {
      dispatch({
        type: 'SET_SEARCH_WORD',
        payload: {
          status: true,
          word: event.target.value,
        },
      });
    }
  };

  const handleChange = (event) => {
    setTextValue(event.target.value);
  };

  useEffect(() => {
    setTextValue(state.searchWord);
  }, [state.searchWord]);

  return (
    <InputStyle
      placeholder={props.placeholder}
      type={props.type}
      onKeyDown={searchVideo}
      name={props.name}
      onChange={handleChange}
      value={textValue}
    />
  );
}

export default Input;
