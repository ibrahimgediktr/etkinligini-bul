import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home/Home';
import Events from '../pages/Events/Events';
import EventDetail from "../pages/EventDetail/EventDetail";
import Categories from "../pages/Categories/Categories";
import Category from "../pages/Category/Category";

function Router({events, categories}) {
  
  return (
    <>
      <Routes>
        <Route
          path="/"
          index
          element={<Home events={events} categories={categories}/>}
        />
        <Route
          path="events"
          element={<Events events={events} />}
        />
         <Route
          path="events/:event_id"
          element={<EventDetail />}
        />
         <Route
          path="categories/:category_id"
          element={<Category />}
        />
        <Route
          path="categories"
          element={<Categories categories={categories} />}
        />
        
        {/* <Route path="*" element={<Error404 />} /> */}
      </Routes>
    </>
  );
}

export default Router;