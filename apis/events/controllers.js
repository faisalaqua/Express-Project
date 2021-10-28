const Event = require("../../db/Models/Event");

// Fetch
exports.eventFetch = async (req, res) => {
  try {
    const events = await Event.find();
    return res.status(200).json(events);
  } catch (error) {
    console.log(error);
  }
};

// Create
exports.eventCreate = async (req, res) => {
  try {
    const newEvent = await Event.create(req.body);
    return res.status(201).json(newEvent);
  } catch (error) {
    console.log(error);
  }
};

// Delete
exports.eventDelete = async (req, res) => {
  try {
    const deleteEvent = await Event.findByIdAndDelete({
      _id: req.params.eventId,
    });
    if (deleteEvent) {
      res.status(204).end();
    } else {
      res.status(400).json("Product not found!");
    }
  } catch (error) {
    console.log(error);
  }
};

// Update
exports.eventUpdate = async (req, res) => {
  try {
    const updateEvent = await Event.findByIdAndUpdate(
      { _id: req.params.eventId },
      req.body,
      { new: true }
    );
    if (updateEvent) {
      return res.json(updateEvent).status(201);
    } else {
      return res.status(404).json("Product not found!");
    }
  } catch (error) {
    console.log(error);
  }
};

// Detail
exports.eventDetail = async (req, res) => {
  try {
    const detailEvent = await Event.findById({ _id: req.params.eventId });
    if (detailEvent) {
      res.json(detailEvent);
    } else {
      return res.json("Product not found!");
    }
  } catch (error) {
    console.log(error);
  }
};

// Fetch Fully booked event
exports.eventFullyBooked = async (req, res) => {
  const fullyBookedEvents = await Event.find({
    $expr: { $eq: ["$numOfSeats", "$bookedSeats"] },
  });
  res.json(fullyBookedEvents);
};
