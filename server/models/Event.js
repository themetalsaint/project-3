const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const eventSchema = new Schema({
  eventDate: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
    required: true,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  eventTime: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  eventTitle: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  eventLocation: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  eventNotes: {
    type: String,
    minlength: 1,
    maxlength: 500,
    trim: true,
  },
  eventCreator: {
    type: String,
    required: true,
    trim: true,
  }
});

const Event = model('Event', eventSchema);

module.exports = Event;
