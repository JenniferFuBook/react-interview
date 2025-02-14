import { useState, useEffect } from 'react';
import useDebounce from '../hooks/use-debounce/useDebounce';

const DebounceExample: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const debouncedSearchTerm = useDebounce<string>({
    value: searchTerm,
    delay: 500,
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log('Performing search for:', debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={handleSearch}
      placeholder="Search..."
      spellCheck="false"
    />
  );
};

export default DebounceExample;
