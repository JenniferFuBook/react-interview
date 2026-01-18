import { useEffect, useState } from 'react';

interface DogApiResponse {
  message: string;
  status: string;
}

const AbortControllerExample = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    // Create an AbortController to manage the lifecycle of the fetch request
    const controller = new AbortController(); 

    async function fetchDog(): Promise<void> {
      try {
        const response = await fetch('/apiproxy/api/breeds/image/random', {
          signal: controller.signal, // Attach the AbortController signal so the request can be cancelled
        });

        const data: DogApiResponse = await response.json();
        setImageUrl(data.message);
      } catch (error) {
        // Ignore abort errors, which are expected during unmount or re-run
        if (error instanceof DOMException && error.name === 'AbortError') { 
          return;
        }
        console.error('Fetch failed:', error); // Log other errors
      }
    }

    fetchDog();

    return () => {
      // Abort any in-flight request when the component unmounts or before the effect re-runs
      controller.abort();
    };
  }, []);

  return (
    <div>
      {imageUrl ? (
        <img src={imageUrl} alt="Random dog" width={300} />
      ) : (
        'Loading...'
      )}
    </div>
  );
};

export default AbortControllerExample;
