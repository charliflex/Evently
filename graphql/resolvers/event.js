import * as eventService from '../../lib/eventService';

export const resolvers = {
  Query: {
    events: async () => eventService.getEvents(),
    event: async (_, { id }) => eventService.getEventById(id),
  },
  Mutation: {
    createEvent: async (_, args) => eventService.createEvent(args),
  },
};
