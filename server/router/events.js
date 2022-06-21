import express from "express";
import events from "../data/events.json";
const router = express.Router();

router.get("/", (req, res) => {
  res.json(events);
});

router.get("/:event_id", (req, res) => {
  let eventId = parseInt(req.params.event_id);
  try {
    let event = events.find((event) => event.id === eventId);
    if (!event) {
      res.status(404).json({
        message: "Event is not found",
      });
    } else {
      res.status(200).json(event);
    }
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve event",
    });
  }
});

export { router as eventsRouter };
