
import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  name: String,
  description: String,
  date: Date,
  rsvps: [
    {
      userId: String,
      response: String,  
    },
  ],
});

export default mongoose.models.Event || mongoose.model('Event', EventSchema);
