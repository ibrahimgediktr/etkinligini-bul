import React, { useEffect, useState } from "react";

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
