import express from "express";
import categories from "../data/categories.json";
import events from '../data/events.json';

const router = express.Router();
router.get("/", (req, res) => {
  res.json(categories);
});
router.get("/:category_id", (req, res) => {
  let categoryId = parseInt(req.params.category_id);
  let filteredEvents = [];
  try {
    filteredEvents = events.filter((e) => e.category === categoryId);
    if(filteredEvents.length > 0){
      res.status(200).json(filteredEvents);
    } else {
      res.status(404).json({
        message: "Categories is not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve categories",
    });
  }
});

export { router as categoriesRouter };
