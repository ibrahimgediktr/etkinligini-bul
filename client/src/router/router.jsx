import React, { useEffect } from "react";
import { Routes, Route, useSearchParams } from "react-router-dom";
import Home from "../pages/Home/Home";
import Events from "../pages/Events/Events";
import EventDetail from "../pages/EventDetail/EventDetail";
import Categories from "../pages/Categories/Categories";
import Category from "../pages/Category/Category";
import Search from "../pages/Search/Search";
import { useLocation } from "react-router-dom";
function Router({ events, categories, filteredEvents, setFilteredEvents }) {
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          index
          element={
            <Home
              events={events}
              categories={categories}
              filteredEvents={filteredEvents}
              setFilteredEvents={setFilteredEvents}
              setSearchParams={setSearchParams}
            />
          }
        />
        <Route path="events" element={<Events events={events} />} />
        <Route path="events/:event_id" element={<EventDetail />} />
        <Route path="categories/:category_id" element={<Category />} />

        <Route
          path="categories"
          element={<Categories categories={categories} />}
        />
        <Route
          path="search/*"
          element={
            <Search
              events={events}
              searchParams={searchParams}
              filteredEvents={filteredEvents}
              setFilteredEvents={filteredEvents}
            />
          }
        />

        {/* <Route path="*" element={<Error404 />} /> */}
      </Routes>
    </>
  );
}

export default Router;
