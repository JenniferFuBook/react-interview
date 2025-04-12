// This example is contained in a single file for simplicity.
// In a real-world application, you would split the components into separate files.

import {
  QueryClient,
  QueryClientProvider,
  useMutation,
} from '@tanstack/react-query';

const queryClient = new QueryClient(); // Create a client

const UseMutationExample: React.FC = () => {
  const { mutate, isPending, data, error } = useMutation({
    // Fetch data
    mutationKey: ['catFact'],
    mutationFn: async () => {
      const response = await fetch('https://catfact.ninja/fact');
      // await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay
      const data = await response.json();
      return data;
    },
  });

  const handleMutation = () => {
    mutate(); // Refetch the query by calling the mutate function
  };

  if (error) {
    return <div>`An error has occurred: ${error.message}`</div>;
  }

  return (
    <>
      <div>
        {isPending ? 'Updating...' : data ? data.fact : 'Nothing fetched yet'}
      </div>
      <button onClick={handleMutation} disabled={isPending}>
        {isPending ? 'Fetching...' : 'Fetch cat fact'}
      </button>
    </>
  );
};

const TanStackUseMutationExample: React.FC = () => {
  return (
    // Must wrap the app with QueryClientProvider to provide the client to the app
    <QueryClientProvider client={queryClient}>
      <UseMutationExample />
    </QueryClientProvider>
  );
};

export default TanStackUseMutationExample;
