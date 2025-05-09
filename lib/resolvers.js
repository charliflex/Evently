import Loc from '../models/Location.js'; 
import User from '../models/User';

const resolvers = {
  Query: {
    locations: async () => await Loc.find(),
  },
  Mutation: {
    addLocation: async (_, { name, description }) => {
      const location = new Loc({ name, description });
      await location.save();
      return location;
    },
    addToWishlist: async (_, { userId, locationId }) => {
      const User = require('../models/User'); 
      const user = await User.findById(userId);
      if (!user) return false;
  
      if (!user.wishlist.includes(locationId)) {
        user.wishlist.push(locationId);
        await user.save();
      }
      return true;
    },
  }
};

export default resolvers;


