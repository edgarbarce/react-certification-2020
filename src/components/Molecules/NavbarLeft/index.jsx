import React from 'react';
import styled from 'styled-components';
import Input from '../../Atoms/Input';
import Hamburguer from '../../Atoms/Hamburguer';

const NavBarLeftSC = styled.div`
  display: flex;
  align-items: center;
`;

const handleChange = (event) => {
  // TODO
  console.log(event);
};

function NavbarLeft() {
  return (
    <NavBarLeftSC>
      <Hamburguer />
      <Input type="text" onchange={handleChange} />
    </NavBarLeftSC>
  );
}

export default NavbarLeft;
