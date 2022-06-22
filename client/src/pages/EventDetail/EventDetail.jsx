import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleEvent } from "../../api/api";

function EventDetail() {
  const { event_id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    if(event_id === undefined) return
    setLoading(true);
    (async () => {
      const data = await fetchSingleEvent(event_id);
      setEvent(data);
      setLoading(false);
    })();
  }, [event_id]);

  if(loading) return <div>Loading...</div>
  return (
    <>
    <div>A</div>
      <div>{event?.id}</div>
      <div>{event?.name}</div>
    </>
  );
}

export default EventDetail;
