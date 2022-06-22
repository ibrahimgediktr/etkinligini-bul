import React, { useEffect, useState } from "react";
import { fetchEvents, fetchCategories } from "./api/api";
import Router from "./router/router";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  const [events, setEvents] = useState(null);
  const [categories, setCategories] = useState(null);
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetchEvents();
      setEvents(data);
    })();
    (async () => {
      const data = await fetchCategories();
      setCategories(data);
    })();
  }, []);

  return (
    <>
      <Navbar categories={categories} />
      <main className="main">
        <Router events={events} categories={categories} filteredEvents={filteredEvents} setFilteredEvents={setFilteredEvents}/>
      </main>
      <Footer categories={categories} events={events} />
    </>
  );
}

export default App;
