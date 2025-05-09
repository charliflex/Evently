import Event from '../models/Event';

export async function getEvents() {
  return await Event.find({});
}

export async function getEventById(id) {
  return await Event.findById(id);
}

export async function createEvent({ name, date, location, description }) {
  const newEvent = new Event({ name, date, location, description });
  return await newEvent.save();
}
