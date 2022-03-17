import React, { useEffect, useState } from "react";
import "./header.css";
import SideBar from "./SideBar";
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
