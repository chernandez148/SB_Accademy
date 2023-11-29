import React from "react";
import owners from "../../../assets/owners.jpg";
import dots from "../../../assets/circle-dots.png";
import stroke from "../../../assets/brush-stroke.png";
import "./styles.css";

function About() {
  return (
    <div className="About">
      <div className="about-wrapper">
        <div className="about-left">
          <img className="owners" src={owners} width="450px" />
          <img className="dots rotating" src={dots} width="150px" />
        </div>
        <div className="about-right">
          <h4>ABOUT US</h4>
          <img className="stroke" src={stroke} />
          <h1>
            Fostering the upcoming leaders of the beauty{" "}
            <span className="accent">industry</span>.
          </h1>
          <p>
            We are a State Board-approved program that provides the apprentice
            with the required{" "}
            <span className="accent">related supplemental training</span> that
            has been approved by the State Board of Barbering and Cosmetology.
            The program sponsor (SBCABCA) is also responsible for submitting
            applications for licensure and completion forms to the State Board
            of Barbering and Cosmetology when the required apprenticeship hours
            have been completed.
          </p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default About;
