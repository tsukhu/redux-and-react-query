import * as React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <div className="section">
      <div className="tabs is-small is-toggle is-toggle-rounded is-centered">
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
          <li
            className={`${
              location.pathname === "/rtkq" ? "is-active" : ""
            }`}
          >
            <Link to="/rtkq">Toolkit & RTK Query</Link>
          </li>
          <li className={`${location.pathname === "/rq" ? "is-active" : ""}`}>
            <Link to="/rq">React Query Only</Link>
          </li>
        </ul>
    
        <ul>
          <li className={`${location.pathname === "/redux-todo" ? "is-active" : ""}`}>
            <Link to="/redux-todo">Core Redux Todo</Link>
          </li>
          <li className={`${location.pathname === "/toolkit-todo" ? "is-active" : ""}`}>
            <Link to="/toolkit-todo">Reduxtoolkit Todo</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
