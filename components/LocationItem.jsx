import Link from 'next/link';

export default function LocationItem({ location }) {
  return (
    <li>
      <Link href={`/location/${location._id}`}>
        <strong>{location.name}</strong> - {location.description}
      </Link>
    </li>
  );
}
