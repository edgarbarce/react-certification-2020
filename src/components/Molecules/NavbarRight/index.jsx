import React from 'react';
import styled from 'styled-components';
import Toggle from '../Toggle';
import Pic from '../../Atoms/Pic';
import Label from '../../Atoms/Label';

const NavBarRightSC = styled.div`
  display: flex;
  align-items: center;
`;

function NavBarRight() {
  return (
    <NavBarRightSC>
      <Toggle isChecked={false} />
      <Label>Dark Mode</Label>
      <Pic />
    </NavBarRightSC>
  );
}

export default NavBarRight;
