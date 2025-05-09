import Link from 'next/link';

export default function EventItem({ event }) {
  return (
    <div style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #ccc' }}>
      <h2>{event.name}</h2>
      <p>{new Date(event.date).toLocaleDateString()} – {event.location}</p>
      <p>{event.description}</p>
      <Link href={`/event/${event._id}`}>View Details</Link>
    </div>
  );
}
