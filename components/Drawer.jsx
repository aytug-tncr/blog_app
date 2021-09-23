import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  transform: ${(props) => (props.open ? "translateX(100%)" : "translateX(0)")};
  background-color: white;
  width: 80%;
  height: 100%;
  transition: transform 0.2s ease-in;

  @media (min-width: 615px) {
    display: none;
  }
`;
const Drawer = () => {
  return (
    <>
      <Wrapper open={true}></Wrapper>
    </>
  );
};

export default Drawer;
