import React from 'react'
import { styled } from 'styled-components';

function Title({title, span}) {
  return (
    <TitleStyled>
      <h2>{title} <b><span>{span}</span></b></h2>
    </TitleStyled>
  )
}

const TitleStyled = styled.div`
    position: relative;
    h2{
      
        color: var(--white-color);
        font-size: 3.8rem;
        font-weight: 600;
        margin-top: -2.5rem;
        margin-left: -1rem;
        position: relative;


        span{
            font-weight: 400;
            color: var(--primary-color);
            font-size: 4rem;
            opacity: calc(10%);
            margin-left: -1rem;
            position: absolute;
            left: 0;
            top: 20%;
             z-index: 2;
        }
        }
`;


export default Title;
