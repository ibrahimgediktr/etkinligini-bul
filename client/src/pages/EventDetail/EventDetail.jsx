import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { fetchCategoryEvents, fetchSingleEvent } from "../../api/api";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { MdDateRange } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";
import Event from "../../components/Event/Event";
import moment from "moment";
import "swiper/css";
import Loading from "../../components/Loading/Loading";

function EventDetail() {
  const { event_id } = useParams();
  const [event, setEvent] = useState(null);
  const [categoryEvents, setCategoryEvents] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  useEffect(() => {
    if (event_id === undefined) return;
    setLoading(true);
    (async () => {
      const data = await fetchSingleEvent(event_id);
      setEvent(data);
      setLoading(false);
    })();
    if (event?.category === undefined) return;
    (async () => {
      const data = await fetchCategoryEvents(event?.category);
      setCategoryEvents(data);
      setLoading(false);
    })();
  }, [event_id, event?.category]);

  const similarEvents = categoryEvents?.filter(
    (similar) => similar.id !== event.id
  );

  if (loading) return <Loading />
  return (
    <div className="event__detail">
      <div className="container event__detail__container">
        <div className="event__detail__left">
          <Swiper
            loop={true}
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              prevEl: ".left",
              nextEl: ".right",
            }}
          >
            {event?.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={`/${image}`} alt="" className="image" />
              </SwiperSlide>
            ))}
            <div className="slider__controller">
              <button ref={navigationPrevRef} className="left">
                <GrFormPrevious size={24} color="#fff" />
              </button>
              <button ref={navigationNextRef} className="right">
                <GrFormNext size={24} color="#fff" />
              </button>
            </div>
          </Swiper>
        </div>
        <div className="event__detail__right">
          <h3 className="name">{event?.name}</h3>
          <div className="date">
            <span>
              <MdDateRange size={22} />
              {moment(event?.start_date).format("DD MMMM YYYY HH:mm")}
            </span>
            <span>
              <MdDateRange size={22} />
              {moment(event?.end_date).format("DD MMMM YYYY HH:mm")}
            </span>
            <div></div>
          </div>
          <p className="description">{event?.description}</p>
          <a href={event?.map} className="map" target="_blank" rel="noreferrer">
            <SiGooglemaps />
            <span>Haritada G??ster</span>
          </a>
          {event?.free ? (
            <div className="prices">
              <h5>Etkinlik ??cretsizdir !</h5>
            </div>
          ) : (
            <div className="prices">
              <h6>Bilet Sat??n Al</h6>
              <div className="tickets">
                {event?.prices.length > 0 &&
                  event?.prices.map((ticket, index) => (
                    <div key={index} className="ticket">
                      <span>{ticket.seat}</span>
                      <h6>{ticket.price} ???</h6>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
        <div className="event__similar">
          <h3 className="events__heading">Benzer Etkinlikler</h3>
          <ul className="events__list">
            {similarEvents?.map((event) => (
              <Event key={event.id} event={event} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EventDetail;
