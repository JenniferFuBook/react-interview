// This example is contained in a single file for simplicity.
// In a real-world application, you would split the components into separate files.

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useQueryClient,
  useIsFetching,
} from '@tanstack/react-query';

const queryClient = new QueryClient(); // Create a client

const UseQueryExample: React.FC = () => {
  const { isPending, isFetching, data, error } = useQuery({
    // Fetch data
    queryKey: ['catFact'],
    queryFn: async () => {
      const response = await fetch('https://catfact.ninja/fact');
      // await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay
      return await response.json();
    },
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>`An error has occurred: ${error.message}`</div>;
  }

  return <div>{isFetching ? 'Updating...' : data.fact}</div>;
};

const InvalidateQueriesExample: React.FC = () => {
  const queryClient = useQueryClient();
  const isFetching = useIsFetching();

  const handleRefetch = () => {
    queryClient.invalidateQueries({ queryKey: ['catFact'] }); // This will refetch the query
  };

  return (
    <button
      onClick={handleRefetch}
      disabled={isFetching > 0}
    >
      Fetch cat fact
    </button>
  );
};

const TanStackUseQueryExample: React.FC = () => {
  return (
    // Must wrap the app with QueryClientProvider to provide the client to the app
    <QueryClientProvider client={queryClient}>
      <UseQueryExample />
      <InvalidateQueriesExample />
    </QueryClientProvider>
  );
};

export default TanStackUseQueryExample;
