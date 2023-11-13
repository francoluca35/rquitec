import React from 'react';
import  styled  from 'styled-components';
import Navegation from './Navegation';

function Sidebar() {
  return (
    <SidebarStyled>
      <Navegation/>
    </SidebarStyled>
  )
}

const SidebarStyled = styled.div`
    width: 12.11rem;
    position: fixed;
    height: 100vh;
    background-color: #354655;
`;

export default Sidebar
