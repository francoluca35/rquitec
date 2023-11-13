/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { styled } from 'styled-components';
import resume1 from '../img/AboutMe/Profiles.jpeg'
import PrimaButtton from './PrimaButtton';

function ImageSection() {
  return (
    <ImageSectionStyled>
     
      <div className="left-content">
        <img src={resume1} alt="resume image" />
      </div>
      <div className="right-content">
        <div className="sub-title">
          <h4>
            Nosotros Somos <span>S&S Diseño y Construcción</span>
          </h4>
        </div>
        <p className="paragraphy">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
          provident minima magni expedita quod hic magnam voluptatem veritatis
          tempora, facere eaque consequuntur nesciunt, soluta officia ratione
          nemo sunt natus esse?
        </p>
        <div className="about-info">
        

        </div>
        <PrimaButtton title={'Arquitectos'} />
      </div>
      {/* fin-about */}

      <section>
        <div className="container-info">

        </div>
      </section>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
margin-top: 3rem;
  display: flex;
  .left-content{
    width: 130%;
    img{
      width: 100%;
      height: 50vh;
    }
  }
  .right-content{
    h4{
      font-size: 1.5rem;
      color: black;
      text-align: center;
      margin-right: -3rem;
      margin-left: 2.2rem;
      span{
        font-size: 1.5rem;

      }
    }
    .paragraphy{
      padding: 1rem 0;
      margin-left: 5rem;
      text-align: center;
      color: black;


    }
    .about-info{
      display: flex;
      .info-title{
        text-align: center
      }
      .info-title, .info{
        color: #fff;
      ;
        p{
          padding: .3rem 0;
          color: #fff;
        }
      }
    }
  }
`;
export default ImageSection
