import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useRef } from "react";
import moment from "moment";

function Slider({ events }) {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const filteredEvents = events?.filter((event) => {
    return event.feature === true;
  });

  return (
    <Swiper
      loop={true}
      modules={[Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      navigation={{
        prevEl: ".left",
        nextEl: ".right",
      }}
      pagination={{ 
        clickable: true ,
        el: `.slider__pagination`,
        bulletClass: `slider__pagination--bullet`
      }}
    >
      {filteredEvents?.map((event) => (
        <SwiperSlide className="slider" key={event.id}>
          <img src={`/${event.images[0]}`} alt="" className="slider__image" />
          <div className="slider__text">
            <h1 className="slider__heading">{event.name}</h1>
            <h6 className="slider__date">
              {moment(event?.start_date).format("DD MMMM YYYY HH:mm")} -{" "}
              {moment(event?.end_date).format("DD MMMM YYYY HH:mm")}{" "}
            </h6>
            <p className="slider__desc">{event.intro}</p>
            <Link
              to={`events/${event.id}`}
              className="btn btn__secondary slider--btn"
            >
              İNCELE
            </Link>
          </div>
          <div className="slider__overlay"></div>
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
      <div className="slider__pagination"></div>
    </Swiper>
  );
}

export default Slider;
