import React from 'react';
import styled from 'styled-components';

const Content = styled.main`
  text-align: center;
`;

function Layout({ children }) {
  return <Content className="container">{children}</Content>;
}

export default Layout;
