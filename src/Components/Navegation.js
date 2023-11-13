import React from 'react';
import  styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import avatar from '../img/logo-1.png'

function Navegation() {
  return (
    <NavegationStyled>
      
    <div className='avatar'>
        <img src={avatar} alt=""/>
    </div>
    <ul className='nav-items'>
        <li className='nav-item'>
            <NavLink to="/" activeClassName="active-class">Inicio</NavLink>
        </li>
        <li className='nav-item'>
            <NavLink to="/about" activeClassName="active-class">Sobre Nosotros</NavLink>
        </li>
        <li className='nav-item'>
            <NavLink to="/jurnal" activeClassName="active-class">Servicios</NavLink>
        </li>
        <li className='nav-item'>
            <NavLink to="/project" activeClassName="active-class">Proyectos</NavLink>
        </li>
        <li className='nav-item'>
            <NavLink to="/contact" activeClassName="active-class">Contacto</NavLink>
        </li>
    </ul>
    <footer className='footer'>
        <p>@2023 by <a href='https://francoluca35.github.io/Portafolios/'>FranComputer</a></p>
    </footer>

    </NavegationStyled>
  )
}

const NavegationStyled = styled.nav`
    display: flex;
    justify-content:space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: .2px solid var(--border-color);
    z-index: -10;
    
    .avatar{
        width: 100%;
        text-align: center;
        border-bottom: 1px solid var(--border-color);
        padding: 1rem 0;
        img{
            width: 80%;
            border-radius: 50%;

        }
    }
    .nav-items{
        width: 100%;
        text-align: center;
        z-index: 10;

        li{
            display: block;
            
            a {
                display: block;
                padding: .2rem 0;
                font-size: .9rem;
                font-weight: 200;
                color: #fff;
                font-family: 'Poppins';
                position: relative;
                z-index:10;

            &hover{
                cursor: pointer;
            }
            &::before{
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                width: 0;
                height: 50%;
                background-color: #999999;
                transition:All .5s cubic-bezier(1,-0.2,.25,.95);
                z-index: 3;
                opacity: 0.23;
            }
            }
              a:hover::before{
                
                width: 100%;
                height: 100%;
                
            }
    }
    }
    .footer{
        color: #fff;
        border-top: 1px solid var(--border-color);
        width: 100%;
        text-align: center;
        p{
            padding: 1rem 0;
            font-size: .6rem;
        }
        a{
            font-size: .6rem;
            color: yellow;
        }
    }
`;
export default Navegation
