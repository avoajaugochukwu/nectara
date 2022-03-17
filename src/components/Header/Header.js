import React, { useState } from "react";
import "./header.css";
const Header = () => {
  const [active, setActive] = useState(false);
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
      <div className="sidebar">

      </div>
    </div>
  );
};

export default Header;
