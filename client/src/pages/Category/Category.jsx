import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCategoryEvents } from "../../api/api";

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
    <ul>
        {categoryEvents?.map(events => (
            <li>
                {events.id}
                {events.name}
            </li>
        ))}
    </ul>
  )
}

export default Category;
