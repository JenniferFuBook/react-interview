// This example is contained in a single file for simplicity.
// In a real-world application, you would split the components into separate files.

import {
  QueryClient,
  QueryClientProvider,
  useIsMutating,
  useMutation,
} from '@tanstack/react-query';

const queryClient = new QueryClient(); // Create a client

const UseMutationExample = () => {
  const { mutate, isPending, data, error } = useMutation({
    // Fetch data
    mutationKey: ['catFact'],
    mutationFn: async () => {
      const response = await fetch('https://catfact.ninja/fact');
      // await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay
      return await response.json();
    },
  });
  const isMutating = useIsMutating({
    mutationKey: ['catFact'],
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
        {isMutating ? 'Fetching...' : 'Fetch cat fact'}
      </button>
    </>
  );
};

const TanStackUseMutationExample = () => {
  return (
    // Must wrap the app with QueryClientProvider to provide the client to the app
    <QueryClientProvider client={queryClient}>
      <UseMutationExample />
    </QueryClientProvider>
  );
};

export default TanStackUseMutationExample;
