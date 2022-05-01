import React from "react";
import four_circles from "../../assets/img/61081e85e686647e9bda4e90_home-section-circles.svg";
import { Button } from "../../stories/Button";

const Contribute = () => {
  return (
    <div className="relative overflow-hidden bg-[#f6f5f3]">
      <img
        className="m-10 sm:absolute sm:-left-16 sm:top-20 w-3/12 "
        src={four_circles}
        alt="Four circle"
      />

      <div className="w-full sm:w-1/3 px-10 sm:mx-auto py-12 sm:py-24">
        <p className=" font-extralight pb-4">Our vision</p>
        <p className="text-4xl pb-10">Contribute to a new paradigm with us</p>
        <p>
          We founded Nectara as a social enterprise—striving to embody the
          lessons of empathy, mutuality, and interconnection that psychedelic
          medicines have blessed us with. Giving back and reimagining business
          as kinder, more collaborative, and heart-centred are at our core.
        </p>
        <div className="mt-10">
          <Button primary label="About us" size="small" />
        </div>
      </div>
    </div>
  );
};

export default Contribute;
