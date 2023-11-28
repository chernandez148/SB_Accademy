import React from "react";
import barbering from "../../../assets/barbering.jpg";
import barberingLogo from "../../../assets/barbering-logo.png";
import Carousel from "../../../templates/Carousel/Carousel";
import CarouselItem from "../../../templates/CarouselItem/CarouselItem";
import "./styles.css";

function Courses() {
  const carousel = [
    {
      img: barbering,
      name: "Barbering Class",
      logo: barberingLogo,
      alt: "barbering class",
    },
    {
      img: barbering,
      name: "Barbering Class",
      logo: barberingLogo,
      alt: "barbering class",
    },
    {
      img: barbering,
      name: "Barbering Class",
      logo: barberingLogo,
      alt: "barbering class",
    },
    {
      img: barbering,
      name: "Barbering Class",
      logo: barberingLogo,
      alt: "barbering class",
    },
    {
      img: barbering,
      name: "Barbering Class",
      logo: barberingLogo,
      alt: "barbering class",
    },
    {
      img: barbering,
      name: "Barbering Class",
      logo: barberingLogo,
      alt: "barbering class",
    },
    {
      img: barbering,
      name: "Barbering Class",
      logo: barberingLogo,
      alt: "barbering class",
    },
    {
      img: barbering,
      name: "Barbering Class",
      logo: barberingLogo,
      alt: "barbering class",
    },
  ];

  return (
    <div className="Courses">
      <div className="courses-wrapper">
        <h4>WHAT WE OFFER</h4>
        <h1>
          Collaborate Directly with Renowned Experts <br />
          in the World of <span className="accent">Barbering</span> and{" "}
          <span className="accent">Cosmetology</span>
        </h1>
        <img
          className="razor floating"
          src={barberingLogo}
          width="150px"
          alt="floating razor blade"
        />
        <Carousel>
          {carousel.map((card, index) => (
            <CarouselItem key={index}>
              <div
                className="card"
                style={{ backgroundImage: `url(${card.img})` }}
              >
                <div className="logo-wrapper">
                  <img src={card.logo} alt={card.name} width="50px" />
                </div>
                <div className="inner-card">
                  <h4>{card.name}</h4>
                </div>
              </div>
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Courses;
