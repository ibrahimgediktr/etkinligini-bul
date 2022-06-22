import React, { useState } from "react";
import Slider from "../../components/Slider/Slider";
import moment from "moment";
function Home({ events, categories }) {

  return (
    <div className="home">
      <Slider events={events} />
      <section className="events">
        <div className="container events__container">
          <div>
            <h3 className="events__heading">Öne Çıkanlar</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
