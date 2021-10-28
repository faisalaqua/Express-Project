const express = require("express");
const {
  eventCreate,
  eventFetch,
  eventDelete,
  eventUpdate,
  eventDetail,
  eventFullyBooked,
} = require("./controllers");
const router = express.Router();

// Event Create
router.post("/", eventCreate);

// Event List
router.get("/", eventFetch);

// Event Update
router.put("/:eventId", eventUpdate);

// Fetch fully booked events
router.get("/fullybooked", eventFullyBooked);

// Event Detail
router.get("/:eventId", eventDetail);

// Event Delete
router.delete("/:eventId", eventDelete);

module.exports = router;
