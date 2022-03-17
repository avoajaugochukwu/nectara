import React from "react";

const Link = ({ isActive, link }) => {
  return (
    <div className="flex mt-5 h-12">
      <div className="text-8xl -mt-8 w-10">
        {isActive ? '•' : ' '}
      </div>
      <div>
        <a href={`${link === 'home' ? '/' : link}`} className="text-5xl capitalize">
          {link}
        </a>
      </div>
    </div>
  );
};

export default Link;
