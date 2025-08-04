import { useState, useEffect, useCallback } from 'react';

interface DogImage {
  message: string; // The image URL
  status: string;
}

const ViteApiProxyExample: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [dog, setDog] = useState<DogImage | null>(null);

  const fetchDogImage = useCallback(async () => {
    setLoading(true);
    setDog(null);

    try {
      // Call the dog API via Vite proxy
      const response = await fetch('/apiproxy/api/breeds/image/random');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data: DogImage = await response.json();
      setDog(data);
    } catch (err) {
      console.error(`Failed to fetch dog image: %{err}`);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDogImage();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Random dog image</h1>
      {dog && (
        <div>
          <img // Display the dog image
            src={dog.message}
            alt="Random Dog"
            // inline styles for demonstration purposes - it is not recommended
            style={{ height: '300px', borderRadius: '12px' }}
          />
          {/* Display the status of the response */}
          <p>Status: {dog.status}</p>
        </div>
      )}
      <button onClick={fetchDogImage} disabled={loading}>
        {loading ? 'Fetching...' : 'Get another dog'}
      </button>
    </>
  );
};

export default ViteApiProxyExample;
