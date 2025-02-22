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
    setQuery(value); // High-priority update for the input field

    // Low-priority update to filter the list of items
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
    <>
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
    </>
  );
};

export default SearchComponent;
