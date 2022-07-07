import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="movies">Movies</Link>
        <Link to="games">Games</Link>
        <Link to="ebooks">E-books</Link>
      </nav>
    </div>
  );
};

export default Header;
