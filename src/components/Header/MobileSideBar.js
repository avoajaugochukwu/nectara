import React from "react";
import decoCircle from "../../assets/img/deco-circle.svg";
import Subscribe from "../Subscribe";
import Link from "./Link";

const MobileSideBar = ({ active }) => {
  return (
    <div className="block sm:hidden">
      {/* <div className={`sidebar-wrapper ${active ? "open" : 'closed'}`} /> */}
      <div
        className={`mobile-sidebar w-full  sm:w-1/2 ${
          active ? "open" : 'closed'
        }`}
      >
        <div className="flex relative">
          <div className="mt-16 ml-8">
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
            className="absolute top-44 right-60 sm:right-48 bottom-auto w-96 overflow-hidden -z-50"
            src={decoCircle}
            alt="yellow circle svg"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileSideBar;
