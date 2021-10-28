import React from "react";
import logo from "../assets/img/logo.png";
import "./header.css";
export default function header() {
  return (
    <div className="header mt-10">
      <img className="headerLogo" src={logo} alt="logo" />
      <ul className="navButtons">
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/department">Deparment</a>
        </li>
        <li>
          <a href="/allemployees">Employee</a>
        </li>
        <li>
          <a href="/director">Director</a>
        </li>
      </ul>
    </div>
  );
}
