import React from "react";
import { Button } from "../../stories/Button";

const Subscribe = () => {
  return (
    <>
      <p className="mt-10">Stay in touch</p>
      <div className="mt-4 mb-1">
        <Button primary label="Subscribe" />
      </div>
      <p className="text-[0.5em]">We will always respect your privacy</p>
    </>
  );
};

export default Subscribe;
