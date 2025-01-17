import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../../Atoms/Input';
import Hamburguer from '../../Atoms/Hamburguer';
import Aside from '../Aside';

const NavBarLeftSC = styled.div`
  display: flex;
  align-items: center;
`;

function NavbarLeft() {
  const [visible, setVisible] = useState(false);
  const toggleAside = () => {
    setVisible(!visible);
  };

  return (
    <NavBarLeftSC>
      <Hamburguer visible={visible} toggleAside={toggleAside} />
      <Aside visible={visible} toggleAside={toggleAside} />
      <Input type="text" name="SearchBar" />
    </NavBarLeftSC>
  );
}

export default NavbarLeft;
