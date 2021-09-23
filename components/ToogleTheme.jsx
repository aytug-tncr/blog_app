import React,{useState} from 'react'
import styled from 'styled-components'

import Moon from "./icons/Moon"
import Sun from "./icons/Sun"

const Wrapper = styled.div`
display: flex;
display: inline-flex;
border: none;
padding: 6px;
justify-content: center;
background-color: ${props=>props.active ? "#ffc154" : "#4e55f0"};
align-items: center;
border-radius: 50%;
cursor: pointer;

@media (min-width: 615px) {
    display: none;
  }
`

const ToogleTheme = () => {
    const [isClick,setClick] = useState(false)

    const handleClick = () =>{
        setClick(!isClick);
    }

    return (
        <Wrapper onClick={handleClick} active={!isClick}>
            {isClick ? <Moon width="22px" height="22px"/> : <Sun width="22px" height="22px"/>}
        </Wrapper>
    )
}

export default ToogleTheme
