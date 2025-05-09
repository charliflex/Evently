import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Location' }]
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
