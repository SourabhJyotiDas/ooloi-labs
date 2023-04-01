const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
   shortTitle: {
      type: String,
      required: true,
   },
   registrationLink: {
      type: String,
      required: true,
   },
   date: {
      type: Date,
      required: true,
   },
   startTime: {
      type: String,
      required: true,
   },
   endTime: {
      type: String,
      required: true,
   },
   about: {
      type: String,
      required: true,
   },
   speakers: [{
      name: {
         type: String,
         required: true,
      },
      information: {
         type: String,
         required: true,
      },
      avatar: {
         public_id: String,
         url: String,
      },
   }],
   moderator: [{
      name: {
         type: String,
      },
      information: {
         type: String,
      },
      avatar: {
         public_id: String,
         url: String,
      },
   }],
   referLink: {
      type: mongoose.Schema.Types.Mixed,
   },
   joiningInfo: {
      type: String,
   },
   organisedBy: [{
      type: String,
   }],
   tags: [{
      type: String,
   }],

});

module.exports = mongoose.model('Event', eventSchema);