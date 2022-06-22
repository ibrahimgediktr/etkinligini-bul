import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
function Footer({ categories, events }) {
  const featuredEvents = events?.filter((event) => event.feature === true);
  return (
    <footer className="footer">
      <div className="container footer__container">
        <h3 className="footer__heading">Etkinliğini Bul</h3>
        <div className="footer__links">
          <h4 className="footer__heading">Kategoriler</h4>
          {categories?.map((category) => (
            <Link
              key={category.id}
              to={`categories/${category.id}`}
              className="footer__link"
            >
              {category.name}
            </Link>
          ))}
        </div>
        <div className="footer__links">
          <h4 className="footer__heading">Öne Çıkanlar</h4>
          {featuredEvents?.map((event) => (
            <Link
              key={event.id}
              to={`events/${event.id}`}
              className="footer__link"
            >
              {event.name}
            </Link>
          ))}
        </div>
        <div className="footer__socials">
          <a href="">
            <BsInstagram />
          </a>
          <a href="">
            <BsFacebook />
          </a>
          <a href="">
            <BsTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
