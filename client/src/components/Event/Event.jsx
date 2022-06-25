import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import 'moment/locale/tr'
function Event({ event }) {
  moment.locale("tr");

  const continueEvent = moment(event?.start_date) <= moment(new Date()) && moment(event?.end_date) >= moment(new Date());

  return (
    <li key={event?.id} className="event__item">
      <Link to={`/events/${event?.id}`}>
        <div className="image__container">
          <img src={`/${event?.images[0]}`} alt="" className="image" />
        </div>
        <div className="texts">
          <h6 className="name">{event?.name}</h6>
          <p className="city">{event?.city}</p>
          <p className="address">{event?.address}</p>
          <span className="date">{moment(event?.start_date).fromNow()}</span>
          {continueEvent && (
            <span className="date" style={{backgroundColor:"#2ecc71"}}>Devam ediyor</span>
          )}
        </div>
      </Link>
    </li>
  );
}

export default Event;
