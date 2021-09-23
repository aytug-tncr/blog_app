import React from "react"
import styled from "styled-components"

import SearchIcon from "../icons/Search"
import MenuIcon from "../icons/Menu"

import ToogleTheme from "../ToogleTheme"
import Overlay from "../Overlay"
import Navigation from "../Navigation"
import Logo from "../Logo"
import Drawer from "../Drawer"

const HeaderMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 615px) {
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  }
`;

const Wrapper = styled.button`
display: inline-flex;
border: none;
padding: 7px;
justify-content: center;
align-items: center;
border-radius: 50%;
cursor: pointer;

@media (min-width: 615px) {
    display: none;
  }
`

const Header = () => {

  return (
    <header>
      <HeaderMain className="container">

        <MenuIcon  width={30} height={30} color="#4845d2"/>
        <Logo/>
        <Navigation/>
       

        <ToogleTheme />
        
        <Wrapper>
        <SearchIcon width={20} height={20} color="#4845d2"/>
        </Wrapper>
        <Overlay  />
        <Drawer/>
      
      </HeaderMain>
    </header>
  );
};

export default Header;
