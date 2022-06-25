import React from "react";
import Event from "../../components/Event/Event";
import moment from 'moment';
import Loading from "../../components/Loading/Loading";

function Search({ searchParams, events }) {
  
  const name = searchParams.get("name");
  const category = searchParams.get("category");
  const city = searchParams.get("city");
  const start_date = searchParams.get("start_date");
  const end_date = searchParams.get("end_date");

  const updatedEvents = events?.filter((event) => {
    var filterName =
    name && name !== ""
        ? event.name
            .toLocaleLowerCase()
            .includes(name.toLocaleLowerCase())
        : event;
    var filterCategory =
    category && category !== "0"
        ? event.category === parseInt(category)
        : event;
    var filterCity =
     city && city !== ""
        ? event.city
            .toLocaleLowerCase()
            .includes(city.toLocaleLowerCase())
        : event;
    var filterDate =
     start_date && start_date !== "" ?
      start_date <=
        moment(event.start_date).format("YYYY/MM/DD") &&
      moment(event.start_date).format("YYYY/MM/DD") <= end_date : event
    return filterName && filterCategory && filterCity && filterDate
  });

  if(!updatedEvents) return <Loading />

  return (
    <div className="search">
      <div className="container search__container">
        <h3 className="events__heading">Aramanıza Ait Sonuçlar</h3>
        {updatedEvents?.length > 0 ? (
            <ul className="events__list">
            {updatedEvents?.map((event) => (
              <Event key={event.id} event={event} />
            ))}
          </ul>
        ): (
            <div>
                <p>Maalesef, aramanıza uygun sonuç bulamadık !</p>
            </div>
        )}
      </div>
    </div>
  );
}

export default Search;
