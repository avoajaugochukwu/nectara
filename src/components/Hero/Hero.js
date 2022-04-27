import React from "react";
import heroImage from "../../assets/img/homeHero.jpeg";
import Header from "../Header";
import Subscribe from "../Subscribe";


const Hero = () => {
  return (
    <>
    <Header />
    <div className="flex flex-col sm:flex-row">
      <div className="w-full sm:w-1/2 p-10 sm:mx-40 sm:mt-10 sm:pr-10">
        <h1 className="text-6xl mb-5">Every day is a ceremony</h1>
        <p className="font-light leading-7 sm:pr-32">
          Integrating and preparing for a psychedelic experience is a journey
          you don't have to walk alone. Support your healing journey with
          Nectara's community, guides, and psychedelic wellness resources.
        </p>
        
        <Subscribe />
      </div>
      <div className="w-full sm:w-1/2">
        <img src={heroImage} alt="hero" />
      </div>
    </div>
    </>
  );
};

export default Hero;
