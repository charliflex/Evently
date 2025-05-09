
import dbConnect from '../../lib/dbConnect';
import Event from '../../models/Event';  

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await dbConnect();

      const { eventId, userId, response } = req.body;  
      const event = await Event.findById(eventId);
      if (!event) {
        return res.status(404).json({ message: 'Event not found' });
      }

      if (!event.rsvps) event.rsvps = [];
      event.rsvps.push({ userId, response });
      
      await event.save();
      res.status(200).json({ message: 'RSVP submitted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error handling RSVP', error });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
