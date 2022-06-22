import React from "react";
import { Link } from "react-router-dom";

function Navbar({ categories }) {
  return (
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
      </div>
    </nav>
  );
}

export default Navbar;
