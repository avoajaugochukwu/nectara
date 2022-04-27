import React, { useEffect, useState } from "react";
import "./header.css";
import SideBar from "./SideBar";
import logo from '../../assets/img/logo.svg'

const Header = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [active]);

  return (
    <div className="h-28">
      <div className="pt-5 absolute pl-5" style={{zIndex: '999999'}}>
        <img src={logo} alt="logo" />
      </div>
      <div
        className={`hamburger ${active ? "open" : undefined}`}
        onClick={() => setActive(!active)}
      >
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      <SideBar active={active} />
    </div>
  );
};

export default Header;
