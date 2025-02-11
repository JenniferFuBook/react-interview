import { useState, useTransition } from 'react';

interface SearchComponentProps {
  items: string[];
}

const SearchComponent: React.FC<SearchComponentProps> = ({ items }) => {
  const [query, setQuery] = useState<string>(''); // Track the search query
  const [results, setResults] = useState<string[]>(items); // Track filtered results
  const [isPending, startTransition] = useTransition(); // Hook for managing transitions

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value); // High-priority update for input field

    // Low-priority update that takes 1 second to complete
    startTransition(async () => {
      await new Promise((resolve) => setTimeout(() => {
        const filteredResults = items.filter((item) =>
          item.toLowerCase().includes(value.toLowerCase())
        );
        setResults(filteredResults);
        resolve(filteredResults);
      }, 1000));
    });
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search items..."
      />
      {isPending && <p>Loading...</p>}
      <ul>
        {results.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
