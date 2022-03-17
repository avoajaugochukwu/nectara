import React from "react";
import decoCircle from "../../assets/img/deco-circle.svg";
import Link from "./Link";

const SideBar = ({ active }) => {
  return (
    <>
      <div className={`sidebar-wrapper ${active ? "open" : undefined}`} />
      <div className={`sidebar ${active ? "open" : undefined}`}>
        <div className="flex relative">
          <div className="mt-32 ml-8">
            <Link isActive link={'home'} />
            <Link isActive={false} link={'community'} />
            <Link isActive={false} link={'experiences'} />
            <Link isActive={false} link={'about'} />
            <Link isActive={false} link={'login'} />
          </div>
          <img
            className="deco-circle-nav-menu"
            src={decoCircle}
            alt="yellow circle svg"
          />
        </div>
      </div>
    </>
  );
};

export default SideBar;
