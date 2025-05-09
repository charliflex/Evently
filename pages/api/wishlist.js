import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { userId, locationId } = req.body;

    const client = new ApolloClient({
      uri: 'http://localhost:3000/api/graphql', 
      cache: new InMemoryCache(),
    });

    try {
      await client.mutate({
        mutation: gql`
          mutation AddToWishlist($userId: ID!, $locationId: ID!) {
            addToWishlist(userId: $userId, locationId: $locationId)
          }
        `,
        variables: { userId, locationId },
      });

      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
