import React from "react";

function Events({events}) {
  return (
    <div>
      <ul>
        {events?.map((event) => (
          <li key={event.id}>
            <p>{event.name}</p>
            <p>{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Events;
