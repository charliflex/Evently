import dbConnect from '../../lib/dbConnect';
import Location from '../../models/Location';


export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const locations = await Location.find({});
      res.status(200).json(locations);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch locations' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
