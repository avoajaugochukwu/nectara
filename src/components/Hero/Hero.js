import React from "react";
import heroImage from "../../assets/img/homeHero.jpeg";
import { Button } from "../../stories/Button";
import Header from "../Header";

const Hero = () => {
  return (
    <>
    <Header />
    <div className="flex">
      <div className="w-1/2 m-40">
        <h1 className="text-7xl font-light mb-5">Every day is a ceremony</h1>
        <p className="pr-48 font-light leading-7">
          Integrating and preparing for a psychedelic experience is a journey
          you don't have to walk alone. Support your healing journey with
          Nectara's community, guides, and psychedelic wellness resources.
        </p>
        <p className="mt-10">Stay in touch</p>
        <div className="mt-4 mb-1">
          <Button primary label="Subscribe" />
        </div>
        <p className="text-xs">We will always respect your privacy</p>
        
      </div>
      <div className="w-1/2">
        <img src={heroImage} alt="hero" />
      </div>
    </div>
    </>
  );
};

export default Hero;