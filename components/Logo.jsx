import React from "react";
import Link from "next/link";
import Image from "next/image";

import styled from "styled-components";
import LogoSvg from "../public/logo.svg";

const StyledLink = styled.a`
  display: flex;
`;

const Logo = () => {
  return (
    <>
      <Link href="/" passHref={true} >
        <StyledLink aria-label="index">
          <Image src={LogoSvg} alt="" width="120" height="50" />
        </StyledLink>
      </Link>
    </>
  );
};

export default Logo;
