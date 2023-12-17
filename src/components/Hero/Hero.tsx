// import React from 'react'
import "./Hero.css";
import "animate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";
import hero_pic from "../../assets/IMG-20231216-WA0063.jpg"

const Hero = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 animate__animated animate__fadeInUp">
            <h1 className="fw-bold mt-5">
              Bring Your <span>IDEAS</span> to <span>LIVE</span>
            </h1>
            <p>with Tranquil codes and get the best offer</p>
            <a href="#">
              <div className="whatsapp">
                <FontAwesomeIcon
                  className="icon fs-4"
                  icon={faWhatsappSquare}
                />
                <span className="fs-5 fw-bold">WhatsApp</span>
              </div>
            </a>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore accusantium reprehenderit est perferendis fugiat. Ab
                  aliquam veritatis veniam unde eum totam, quis possimus rem
                  omnis inventore corrupti. Quam, eveniet corrupti.
                </p>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-5">
          <img className="image w-100 animate__animated animate__fadeInDown" src={hero_pic} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
