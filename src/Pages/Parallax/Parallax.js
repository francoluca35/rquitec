import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./styles.css";

import image1 from "./AboutMe/1.jpg";
import image2 from "./AboutMe/2.jpg";
import image3 from "./AboutMe/3.jpg";
import image4 from "./AboutMe/4.jpg";

export const About = () => {
  const { innerHeight } = window;

  const getRatio = (el) => innerHeight / (innerHeight + el.offsetHeight);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray("section").forEach((section, i) => {
      section.bg1 = section.querySelector(".bg1");

      gsap.fromTo(
        section.bg1,
        {
          backgroundPosition: () =>
            i ? `50% ${-innerHeight * getRatio(section)}px` : "50% 0px",
        },
        {
          backgroundPosition: () =>
            `50% ${innerHeight * (1 - getRatio(section))}px`,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: () => (i ? "top bottom" : "top top"),
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
  }, );

  return (
    <>
   
      <section id="about1">
        <div className="bg1" style={{ backgroundImage: `url(${image1}` }} />
        <h1 className="About1"></h1>
        <p className="texto-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsum placeat in molestias nulla qui distinctio. Fuga vitae adipisci optio quidem? Quia quae dolore officiis placeat suscipit maiores numquam eius!</p>
      </section>
      
      <section id="d1">
        <div className="bg1" style={{ backgroundImage: `url(${image4}` }} />
        <h1 className="About"></h1>
        <p className="text-NP">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore adipisci odit dolor fugit hic repudiandae distinctio, quia mollitia earum expedita nihil impedit atque totam similique culpa? Sint quas quidem beatae!</p>
      </section>
      <section id="d2">
        <div className="bg1" style={{ backgroundImage: `url(${image2}` }} />
        <h1 className="Studie"></h1>
        <section className="section-texto">
        <p className="text-AL">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore adipisci odit dolor fugit hic repudiandae distinctio, quia mollitia earum expedita nihil impedit atque totam similique culpa? Sint quas quidem beatae!</p>
        </section>
      </section>
      <section id="d3">
        <div className="bg1" style={{ backgroundImage: `url(${image3}` }} />
        <h1 className="Arq"></h1>
        <section className="section-texto">
        <p className="text-PY">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore adipisci odit dolor fugit hic repudiandae distinctio, quia mollitia earum expedita nihil impedit atque totam similique culpa? Sint quas quidem beatae!</p>
        </section>
      </section>
    </>
  );
};
