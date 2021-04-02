import React from 'react';
import styled from 'styled-components';
import NavbarLeft from '../../Molecules/NavbarLeft';
import NavbarRight from '../../Molecules/NavbarRight';

const Navbar = styled.nav`
  min-height: 70px;
  background: black;
  display: flex;
  min-width: 100%;
  align-items: center;
  justify-content: space-between;
  box-shadow: -2px 5px 4px 0 rgb(0 0 0 / 71%);
`;

function Header() {
  return (
    <Navbar>
      <NavbarLeft />
      <NavbarRight />
    </Navbar>
  );
}

export default Header;
