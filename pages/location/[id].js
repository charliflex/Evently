import dbConnect from '../../lib/dbConnect';
import Loc from '../../models/Location';
import Layout from '../../components/Layout';
import { useState } from 'react';


export async function getServerSideProps({ params }) {
  await dbConnect();
  const location = await Loc.findById(params.id).lean();

  if (!location) {
    return { notFound: true };
  }

  return {
    props: {
      location: {
        ...location,
        _id: location._id.toString(),
      },
    },
  };
}

export default function LocationDetail({ location }) {
  const [message, setMessage] = useState('');

  const handleAddToWishlist = async () => {
    const res = await fetch('/api/wishlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: 'your-current-user-id',
        locationId: location._id,
      }),
    });

    if (res.ok) {
      setMessage('Added to wishlist!');
    } else {
      setMessage('Failed to add.');
    }
  };
  return (
    <Layout>
      <h1>{location.name}</h1>
      <p>{location.description}</p>
      <button onClick={handleAddToWishlist}>Add to Wishlist</button>
      {message && <p>{message}</p>}    </Layout>
  );
}

