import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="headerMenu">
      <nav className="headerMenuWrapper">
        <Link className="headerMenuItem" to="/">
          Home
        </Link>
        <Link className="headerMenuItem" to="movies">
          Movies
        </Link>
        <Link className="headerMenuItem" to="games">
          Games
        </Link>
        <Link className="headerMenuItem" to="ebooks">
          E-books
        </Link>
      </nav>
    </header>
  );
};

export default Header;
