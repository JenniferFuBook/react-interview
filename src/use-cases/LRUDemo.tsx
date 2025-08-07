import { useState } from 'react';
import LRUCache from '../algorithms/lru/LRUCache';

const cache = new LRUCache<number, string>(3);

export const LRUDemo: React.FC = () => {
  const [key, setKey] = useState<number>(0);
  const [value, setValue] = useState<string>('');
  const [result, setResult] = useState<string | number | null>(null);
  const [entries, setEntries] = useState<[number, string][]>([]);

  const handlePut = () => {
    cache.put(key, value);
    setEntries(cache.entries());
    setResult(null);
  };

  const handleGet = () => {
    const res = cache.get(key);
    setResult(res);
    setEntries(cache.entries());
  };

  return (
    <>
      <h3>LRU Cache Demo</h3>
      <input
        type="number"
        value={key}
        onChange={(e) => setKey(Number(e.target.value))}
        placeholder="Key"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Value"
      />
      <div>
        <button onClick={handlePut} disabled={value.trim() === ''}>
          Put
        </button>
        <button onClick={handleGet}>Get</button>
      </div>

      {result !== null && <h3>Get Result: {result}</h3>}

      <h3>Cache State:</h3>
      <ul>
        {entries.map(([k, v]) => (
          <li key={k}>
            {k} → {v}
          </li>
        ))}
      </ul>
    </>
  );
};

export default LRUDemo;
