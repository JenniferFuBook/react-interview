import { useEffect, useState } from 'react';

interface DogApiResponse {
  message: string;
  status: string;
}

const FlagIsMountedExample = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true; // Track whether the component is still mounted

    async function fetchDog(): Promise<void> {
      const response = await fetch('/apiproxy/api/breeds/image/random');
      const data: DogApiResponse = await response.json();

      if (isMounted) {
        // Only update state if the component has not unmounted
        setImageUrl(data.message);
      }
    }

    fetchDog();

    return () => {
      // Mark the component as unmounted to prevent state updates
      isMounted = false;
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

export default FlagIsMountedExample;
