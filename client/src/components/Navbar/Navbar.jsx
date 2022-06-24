import React from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

function Navbar({ categories }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="container navbar__container">
          <Link to="/">
            <h1 className="navbar__logo">Etkinliğini Bul</h1>
          </Link>
          <div className="navbar__list">
            <Link to="/" className="navbar__link">
              Anasayfa
            </Link>
            {categories?.map((category) => (
              <Link
                key={category.id}
                to={`categories/${category.id}`}
                className="navbar__link"
              >
                {category.name}
              </Link>
            ))}
          </div>
          <div className="menu__button" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <IoMdClose size={30} color="#fff" />
            ) : (
              <FiMenu size={25} color="#fff" />
            )}
          </div>
        </div>
      </nav>
      <nav className={`mobile__navbar ${isOpen ? "active" : ""}`}>
        <div className="mobile__navbar__list">
          <Link to="/" className="navbar__link">
            Anasayfa
          </Link>
          {categories?.map((category) => (
            <Link
              key={category.id}
              to={`categories/${category.id}`}
              className="navbar__link"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
