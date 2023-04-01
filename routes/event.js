const express = require("express");
const { createEvent, deleteEvent, getAllEvents, updateEvent,eventDetails } = require("../controller/event");


const router = express.Router();


router.route("/create").post(createEvent);
router.route("/details/:id").get(eventDetails);
router.route("/update/:id").put(updateEvent);
router.route("/delete/:id").delete(deleteEvent);
router.route("/events").get(getAllEvents);


module.exports = router;