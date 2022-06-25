import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { AiFillGithub } from "react-icons/ai";

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
          <a href="https://www.ibrahimgedik.dev/" target="_blank" rel="noreferrer" >
            <CgWebsite size={30} />
          </a>
          <a href="https://www.linkedin.com/in/ibrahimgedik/" target="_blank" rel="noreferrer">
            <BsLinkedin size={24} />
          </a>
          <a href="https://github.com/ibrahimgediktr" target="_blank" rel="noreferrer">
            <AiFillGithub size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
