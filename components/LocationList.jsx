import LocationItem from './LocationItem';

export default function LocationList({ locations }) {
  return (
    <ul>
      {locations.map(loc => (
        <LocationItem key={loc._id} location={loc} />
      ))}
    </ul>
  );
}
