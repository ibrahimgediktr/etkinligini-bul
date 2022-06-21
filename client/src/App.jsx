import React, { useEffect, useState } from "react";
import { fetchEvents, fetchCategories } from "./api/api";

function App() {
  const [events, setEvents] = useState(null);
  const [categories, setCategories] = useState(null);

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
    </>
  );
}

export default App;
