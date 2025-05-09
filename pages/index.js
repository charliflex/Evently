import dbConnect from '../lib/dbConnect';
import Loc from '../models/Location';
import LocationList from '../components/LocationList';
import Layout from '../components/Layout';

export async function getStaticProps() {
  await dbConnect();
  const locations = await Loc.find().lean();
  const formatted = locations.map(loc => ({
    ...loc,
    _id: loc._id.toString()
  }));

  return { props: { locations: formatted } };
}

export default function Home({ locations }) {
  return (
    <Layout>
      <h1>Home Page</h1>
      <LocationList locations={locations} />
    </Layout>
  );
}
