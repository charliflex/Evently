import mongoose from 'mongoose';

const LocationSchema = new mongoose.Schema({
  name: String,
  description: String,
});

export default mongoose.models.Location || mongoose.model('Location', LocationSchema);
