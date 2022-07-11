import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import MyButton from "../UI/button/MyButton/MyButton";
import { SiBurgerking, SiXamarin } from "react-icons/si";

const Header = () => {
  const [showBurger, setShowBurger] = useState(false);

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
      <nav className="mobileMenuWrapper">
        {showBurger ? (
          <MyButton
            className="burgerButton"
            onClick={() => setShowBurger(!showBurger)}
          >
            <SiXamarin />
          </MyButton>
        ) : (
          <MyButton
            className="burgerButton"
            onClick={() => setShowBurger(!showBurger)}
          >
            <SiBurgerking />
          </MyButton>
        )}
        {showBurger && (
          <>
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
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
