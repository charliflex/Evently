import Layout from '../../components/Layout';
import LocationList from '../../components/LocationList';

export default function UserWishList({ locations }) {
  return (
    <Layout>
      <h1>Your Wish List</h1>
      <LocationList locations={locations} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { user_id } = context.params;
  const res = await fetch(`http://localhost:3000/api/users/${user_id}/wishlist`);
  const locations = await res.json();

  return {
    props: {
      locations,
    },
  };
}
