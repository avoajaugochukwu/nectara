import React from "react";
import decoCircle from "../../assets/img/deco-circle.svg";
import Subscribe from "../Subscribe";
import Link from "./Link";

const SideBar = ({ active }) => {
  return (
    <div className="hidden sm:block">
      {/* <div className={`sidebar-wrapper ${active ? "open" : 'closed'}`} /> */}
      <div
        className={`sidebar w-full  sm:w-1/2 ${
          active ? "open" : 'closed'
        }`}
      >
        <div className="flex relative">
          <div className="mt-32 ml-8">
            <Link isActive link={"home"} />
            <Link isActive={false} link={"community"} />
            <Link isActive={false} link={"experiences"} />
            <Link isActive={false} link={"about"} />
            <Link isActive={false} link={"login"} />

            <div className="ml-10">
              <Subscribe />
            </div>
          </div>
          <img
            className="absolute top-44 -right-60 sm:-right-48 bottom-auto w-96 overflow-hidden -z-50"
            src={decoCircle}
            alt="yellow circle svg"
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
