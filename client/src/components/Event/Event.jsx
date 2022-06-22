import React from "react";
import { Link } from "react-router-dom";
function Event({ event }) {
  return (
    <li key={event?.id} className="event__item">
      <Link to={`events/${event?.id}`}>
        <div className="image__container">
          <img src={`/${event?.images[0]}`} alt="" className="image" />
        </div>
        <div className="texts">
          <h6>{event?.name}</h6>
          <p>{event?.city}</p>
          <p>{event?.address}</p>
        </div>
      </Link>
    </li>
  );
}

export default Event;
