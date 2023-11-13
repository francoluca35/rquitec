import React from 'react'
import { styled } from 'styled-components'

function PrimaButtton({title}) {
  return (
    <PrimaryButtonStyled>
      {title}
    </PrimaryButtonStyled>
  )
}

const PrimaryButtonStyled = styled.a`

    background-color: #322E2E;
    margin-left: 14rem;
    padding: .5rem 3rem;
    color: white;
    cursor:pointer;
    display: inline-block;
    font-size: inherit;
    position: relative;
    transition: all .4s ease-in-out;
    border-radius: 6px;
    &:hover{
        content: "";
        background-color: #AFAB37;
        color: white;
        transition: all .4s ease-in-out;
        left: 0;
        bottom: 0;
    }
    
`;
export default PrimaButtton
