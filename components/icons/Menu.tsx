import React from 'react'
import styled from "styled-components"

interface Props  {
  color:string,
  width:number,
  height:number
}
const Wrapper = styled.button`
display: inline-flex;
border: none;
background-color:transparent;
justify-content: center;
align-items: center;
cursor: pointer;


@media (min-width: 615px) {
    display: none;
    cursor: pointer;
  }
`
const Menu = ({color,width,height}:Props) => {
    return (
      <Wrapper>
      <svg aria-label="Menu" width={width} height={height}>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M4 7h22M4 15h22M4 23h22"
      />
    </svg>
    </Wrapper>
    )
}

export default Menu
