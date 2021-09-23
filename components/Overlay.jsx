import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  visibility: ${(props) => (props.visiable ? "visible" : "hidden")};
  opacity: ${(props) => (props.visiable ? "1" : "0")};
  transition: all 0.2s ease-in;

  @media (min-width: 615px) {
    display: none;
  }
`;

const Overlay = () => {
  return (
    <>
      <Wrapper visiable={false} />
    </>
  );
};

export default Overlay;
