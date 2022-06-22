import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCategoryEvents } from "../../api/api";
import Event from "../../components/Event/Event";

function Category() {
  const { category_id } = useParams();
  const [categoryEvents, setCategoryEvents] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await fetchCategoryEvents(category_id);
      setCategoryEvents(data);
    })();
  }, [category_id]);

  return (
    <div className="category__events">
      <div className="container events__container">
        <h3 className="events__heading"></h3>
        <ul className="events__list">
          {categoryEvents?.map((event) => (
            <Event key={event.id} event={event} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Category;
