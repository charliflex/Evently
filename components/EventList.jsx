import EventItem from './EventItem';

export default function EventList({ events }) {
  if (!events || events.length === 0) {
    return <p>No events found.</p>;
  }

  return (
    <div>
      {events.map((event) => (
        <EventItem key={event._id} event={event} />
      ))}
    </div>
  );
}
