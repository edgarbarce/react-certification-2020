import React from 'react';
import styled from 'styled-components';
import Input from '../../Atoms/Input';
import Hamburguer from '../../Atoms/Hamburguer';

const NavBarLeftSC = styled.div`
  display: flex;
  align-items: center;
`;

function NavbarLeft(props) {
  return (
    <NavBarLeftSC>
      <Hamburguer />
      <Input type="text" onKeyDown={props.onKeyDown} />
    </NavBarLeftSC>
  );
}

export default NavbarLeft;
