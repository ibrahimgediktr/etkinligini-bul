import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCategories, fetchCategoryEvents } from "../../api/api";
import Event from "../../components/Event/Event";
import Loading from "../../components/Loading/Loading";

function Category() {
  const { category_id } = useParams();
  const [categoryEvents, setCategoryEvents] = useState(null);
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true)
      const data = await fetchCategoryEvents(category_id);
      setCategoryEvents(data);
      setLoading(false);
    })();
    (async () => {
      setLoading(true)
      const data = await fetchCategories();
      setCategory(data);
      setLoading(false);
    })();
  }, [category_id]);

  const categoryName = category?.find(c => c.id === parseInt(category_id));

  if (loading) return <Loading />;

  return (
    <div className="category__events">
      <div className="container events__container">
        <h3 className="events__heading">{categoryName?.name}</h3>
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
