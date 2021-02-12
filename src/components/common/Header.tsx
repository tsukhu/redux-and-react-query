import * as React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <div className="tabs is-size-7">
      <ul>
        <li className={`${location.pathname === "/" ? "is-active" : ""}`}>
          <Link to="/">Core Redux</Link>
        </li>
        <li
          className={`${location.pathname === "/toolkit" ? "is-active" : ""}`}
        >
          <Link to="/toolkit">Redux Toolkit</Link>
        </li>
        <li
          className={`${
            location.pathname === "/toolkit-rq" ? "is-active" : ""
          }`}
        >
          <Link to="/toolkit-rq">Toolkit & React Query</Link>
        </li>
        <li className={`${location.pathname === "/rq" ? "is-active" : ""}`}>
          <Link to="/rq">React Query Only</Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
