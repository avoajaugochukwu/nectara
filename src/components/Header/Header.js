import React, { useEffect, useState } from "react";
import "./header.css";
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
    <div>
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
      
      <div className={`sidebar ${active ? "open" : undefined}`}></div>
      <div className={`sidebar-wrapper ${active ? "open" : undefined}`}></div>
    </div>
  );
};

export default Header;
