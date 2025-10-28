// This example is contained in a single file for simplicity.
// In a real-world application, you would split the components into separate files.

import { ApolloClient, InMemoryCache, gql, HttpLink } from '@apollo/client';
import { ApolloProvider, useQuery } from '@apollo/client/react';

// Define the GraphQL query to fetch location data
const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

// Initialize Apollo Client with the GraphQL API endpoint
const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://flyby-router-demo.herokuapp.com/', // Use an example GraphQL API endpoint
  }),
  cache: new InMemoryCache(),
});

// Define the types for the GraphQL response
type Location = {
  id: string;
  name: string;
  description: string;
  photo: string;
};

type LocationsData = {
  locations: Location[];
};

const DisplayLocations = () => {
  const { loading, error, data } = useQuery<LocationsData>(GET_LOCATIONS); // Use the useQuery hook to fetch data

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error : {error.message}</p>;
  }

  return data?.locations.map(({ id, name, description, photo }: Location) => (
    <div key={id}>
      <h3>{name}</h3>
      <img width="400" height="250" alt="location-reference" src={photo} />
      <br />
      <b>About this location:</b>
      <p>{description}</p>
      <br />
    </div>
  ));
};

const GraphQLExample = () => {
  return (
    // ApolloProvider makes the Apollo Client available to all components in the tree
    // that need to access the Apollo Client.
    <ApolloProvider client={client}>
      <DisplayLocations />
    </ApolloProvider>
  );
};

export default GraphQLExample;
