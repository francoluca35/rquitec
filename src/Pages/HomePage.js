import React, {useEffect} from 'react'
import background1 from '../img/background-5.jpg';
import background2 from '../img/background-6.jpg';
import backgroundhero from '../img/background-1.jpeg';
import hero2 from '../img/hero2.jpg'
import styled from "styled-components";


import AOS from 'aos';

function HomePage() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <HomePageStyled>
      <div className="img" style={{ backgroundImage: `url(${background1})` }}>
        <div className="stuffed">
        
          <h1 className="title-home">
            S<span>&</span>S Diseño & Construcción
          </h1>
          
          
           <div>
           <h4 className="subtitle-home">
              Detrás de cada proyecto existe una idea. Hacer arquitectura
              consiste en materializar esa idea.
            </h4></div>
       
        </div>
        <div className="icons">
          <a
            className="btn-icon"
            href="https://www.facebook.com/franco.carp.carp35"
          >
            <div className="i-facebook">
           
            </div>
          </a>
          <a
            className="btn-icon"
            href="https://www.instagram.com/franco.luca24/"
          >
            <div className="i-instagram">
             
            </div>
          </a>
          <a className="btn-icon" href="www.google.com">
            <div className="i-whatsapp">
            
            </div>
          </a>
        </div>
      </div>
      {/* fin inicio */}
      {/* hero */}
      <section className="Hero">
        <div
          className="hero-container"
          style={{ backgroundImage: `url(${backgroundhero})` }}
        >
          <h1 className="title-hero" data-aos="fade-right"></h1>
        </div>
        <div className="hero-content">
          <p className="info-container" data-aos="fade-left">
            Fachadas modernas y de alta calidad, mampostería perfilada, balcones
            franceses y amplias terrazas exteriores. Las fachadas son
            individuales para cada una de las torres, pero siguen un concepto
            común.
          </p>
        </div>
      </section>
      {/* fin arquitectura */}
      <section className="Hero2">
        <div
          className="hero-container2"
          style={{ backgroundImage: `url(${hero2})` }}
        >
          <h1 className="title-hero2" data-aos="fade-left"></h1>
        </div>
        <div className="info-container2">
          <p className="info-text" data-aos="fade-right">
            Amplias zonas de entrada en dos niveles con techos altos, escaleras
            y zonas de espera en cada entrada.
          </p>
        </div>
      </section>
      {/* fin interior */}
      <section className="Hero-3">
        <div
          className="hero-container3"
          style={{ backgroundImage: `url(${background2})` }}
        >
          <h1 className="title-hero3" data-aos="fade-right"></h1>
        </div>
        <div className="hero-content3">
          <p className="info-container3" data-aos="fade-left">
            Diseños funcionales y formatos poco comunes: dormitorios principales
            con vestidores y baños propios, combinaciones de apartamentos,
            amplias terrazas,
          </p>
        </div>
        
      </section>
      
      {/* fin apartamentos */}
  </HomePageStyled>
  );

}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  .img {
    width: 100%;
    height: 100vh;
    
    

    img {
      width: 10%;
      height: 10%;
     
    }

  }
  .stuffed {
    .title-home {
      position: flex;
      text-align: center;
      width: 1rem;
      padding: 10px;
      color: #fff;
      font-size: 3.8rem;
      font-family:'Libre Baskerville', serif;
      font-weight: 900;
      text-transform:capitalize;
      /* font-style: italic; */
      z-index: 10;
      text-shadow: 0 2px 0 #fff,
                0 3px 0 #fffa,
                0 4px 0 #fffb, 
                0 5px 0 #000, 
                0 6px 0 #000, 
                0 7px 2px rgba(0, 0, 0, .1), 
                0 0 6px rgba(0, 0, 0, .1), 
                0 2px 3px rgba(0, 0, 0, .3), 
                0 4px 6px rgba(0, 0, 0, .2), 
                0 6px 12px rgba(0, 0, 0, .25), 
                0 12px 12px rgba(0, 0, 0, .2),
                0 22px 23px rgba(0, 0, 0, .15) ; 
      
      
      
      span {
        font-size: 1.6rem;
      }

    }

    .subtitle-home{
      font-size: .95rem;
      font-family: 'Poppins';
       font-weight: 500;
       position: absolute;
       top: 1rem;
      left: 2%;
      text-transform:capitalize;
      text-align: center;
      color: white;
      background-color: #22281888;
      
      
 
    }

  }
  .icons{
    display: table;
    margin-top: 10%;
    margin-left: 48rem;
    color:#323232;

    
  }
  .i-facebook{
    color: #B6A6A6;
  }
  .i-facebook:hover{
    color: #5544A3;
    transition: 1s;
    
  }
  .i-instagram:hover{
    color:#D43089;
    transition: 1s;
  }
  .i-whatsapp:hover{
    color: #28B228;
    transition: 1s;
  }
  .btn-icon{
    color: white;
  }

/* fin inicio */
/* hero */
.Hero{
  background-color: #2121;
  .hero-container{
    display: flex;
    width: 50%;
    height: 70vh;
    z-index: 10;
  }
  .title-hero{
    margin-top: 25vh;
    margin-left: .1rem;
    color: #fff;
    font-size: 4rem;
    text-decoration: underline var(--font-light-color);
  }
  .info-container{
    display: flex;
    height: 41.22vh;
    margin-left: 28rem;
    margin-top: -28%;
    font-size: 1rem;
    color: #fff;
    text-align: center;
    letter-spacing: 1px
  }
  p{
      text-align: center;
       font-size: 1rem;
       margin-left: .5rem;
       letter-spacing: 10px;
       
    }

}
.Hero2{
  background-color:#212121; 
  .hero-container2{
    display: flex;
    float: right;
    width: 50%;
    height: 72.4vh;
    margin-top: -.8rem;
  }
  .title-hero2{
    margin-top: 28vh;
    margin-left: 25%;
    color: #fff;
    font-size: 4rem;
    text-decoration: underline var(--font-light-color);
  }
  .info-container2{
    display: flex;
    height:70vh;
    color: #fff;

    p{    
      text-align: center;
      margin-top: 37%;
       font-size: 1rem;
       margin-left: .5rem;
       letter-spacing: 1px
    }
  }

}
.Hero-3{
  background-color: #212121;
  height: 70vh;
  .hero-container3{
    display: flex;
    width: 50%;
    height: 69.9vh;
  }
  .title-hero3{
    margin-top: 28vh;
    margin-left: .8%;
    color: #fff;
    font-size: 3.4rem;
    text-decoration: underline var(--font-light-color);
  }
  .info-container3{
    display: flex;
    height: 35.7vh;
    margin-left: 28rem;
    margin-top: -23%;
    font-size: 1rem;
    color: #fff;
    text-align: center;
  

  }   
  p{
      text-align: center;
       font-size: 1rem;
       margin-left: .5rem;
       letter-spacing: 1px;
       margin-top: -27.5% !important;
    }
}
/* fin hero */
`;
export default HomePage
