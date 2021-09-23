import React from "react";
import styled from "styled-components";

interface Props  {
  color:string,
  width:number,
  height:number
}


const Search = ({color,width,height} :Props) => {
  return (
    
    <svg width={width} height={height} >
      <path
        d="M14.386 14.386l4.088 4.088-4.088-4.088A7.533 7.533 0 113.733 3.733a7.533 7.533 0 0110.653 10.653z"
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  
  );
};

export default Search;
