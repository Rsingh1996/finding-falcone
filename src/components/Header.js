import React from "react";
import "./Header.css";
export const Header = () => {
  return (
    <header className="app-header">
      <div className="navbar">
        <h1 className="title">Finding Falcone !</h1>
        <ul className="navMenu">
          <li>
            <a href="/">Reset</a>
          </li>
          <>|</>
          <li>
            <a href="https://www.geektrust.com/">Home Geek Trust</a>
          </li>
        </ul>
      </div>
    </header>
  );
};
