import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.nav`
  @media (max-width: 615px) {
    visibility: hidden;
    position: fixed;
    top: 0;
    left: 0;
    width: 80%;
    height: 100%;
    background-color: white;
    padding: 10px 15px;
  }
`;

const NavUl = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  gap: 25px;

  @media (max-width: 615px) {
    flex-direction: column;
  }
`;

const Resume = styled.a`
display: inline-flex;
background-color: #4845d2;
padding: 9px 16px;
border-radius: 12px;
cursor: pointer;
color: white;
font-weight: 500;
font-size: 14px;
letter-spacing: 2px;
`
const NavLi = styled.li`
  font-size: 15px;
  font-weight: bold;
  &:hover {
    color: ${props=>props.theme.colors.darkblue};
    transition-duration: 300ms;
  }
`;

const Navigation = () => {
  return (
    <>
      <Wrapper>
        <NavUl>
          <NavLi>
            <Link href="/">
              <a>Anasayfa</a>
            </Link>
          </NavLi>

          <NavLi>
            <Link href="/projelerim">
              <a>Projelerim</a>
            </Link>
          </NavLi>

          <NavLi>
            <Link href="/hakkimda">
              <a>Hakkımda</a>
            </Link>
          </NavLi>

          <NavLi>
            <Link href="/iletisim">
              <a>İletişim</a>
            </Link>
          </NavLi>

          <li>
            <Link href="/asd">
              <Resume>Resume</Resume>
            </Link>
          </li>

        </NavUl>
      </Wrapper>
    </>
  );
};

export default Navigation;
