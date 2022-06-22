import React from "react";
import Event from "../../components/Event/Event";
function Search({ filteredEvents }) {
  console.log(filteredEvents);
  return (
    <div className="search">
      <div className="container search__container">
        <h3 className="events__heading">Aramanıza Ait Sonuçlar</h3>
        {filteredEvents.length > 0 ? (
            <ul className="events__list">
            {filteredEvents?.map((event) => (
              <Event key={event.id} event={event} />
            ))}
          </ul>
        ): (
            <div>
                <h5>Maalesef, aramanıza uygun sonuç bulamadık !</h5>
            </div>
        )}
      </div>
    </div>
  );
}

export default Search;
