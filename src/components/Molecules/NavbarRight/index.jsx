import React from 'react';
import styled from 'styled-components';
import Toggle from '../Toggle';
import Label from '../../Atoms/Label';
import Dropdown from '../Dropdown';

const NavBarRightSC = styled.div`
  display: flex;
  align-items: center;
`;

function NavBarRight() {
  return (
    <NavBarRightSC>
      <Toggle isChecked={false} />
      <Label>Dark Mode</Label>
      <Dropdown />
    </NavBarRightSC>
  );
}

export default NavBarRight;
