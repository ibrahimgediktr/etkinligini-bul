import React, { useState } from "react";
import Filter from "../../components/Filter/Filter";
import Slider from "../../components/Slider/Slider";
import Event from "../../components/Event/Event";
import moment from "moment";
import "moment/locale/tr";

function Home({ events, categories, filteredEvents, setFilteredEvents }) {

  console.log(filteredEvents);
  const parsedDate = (date) => {
    const formattedDate = moment(date).format("YYYY/MM/DD");
    return formattedDate;
  };

  const pastEvents = events?.filter(
    (event) => moment(event.start_date).diff(moment(new Date()), "days") < 0 && moment(event.start_date).diff(moment(new Date()), "days") >= -6 
  );
  const upcomingEvents = events?.filter(
    (event) =>  moment(event.start_date).diff(moment(new Date()), "days") >= 0 && moment(event.start_date).diff(moment(new Date()), "days") <= 7
  )

 
  return (
    <div className="home">
      <Slider events={events} />
      <Filter
        events={events}
        categories={categories}
        setFilteredEvents={setFilteredEvents}
      />
      <section className="events">
        <div className="container events__container">
          <div>
            <h3 className="events__heading">Yaklaşan Etkinlikler</h3>
            <ul className="events__list">
              {upcomingEvents?.map((event) => (
                <Event key={event.id} event={event} />
              ))}
            </ul>
          </div>
          <div>
            <h3 className="events__heading">Geçmiş Etkinlikler (Son 1 Hafta)</h3>
            <ul className="events__list">
              {pastEvents?.map((event) => (
                <Event key={event.id} event={event} />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
