import { useState, useEffect } from 'react';

type useDebounceProps<T> = {
  value: T; // The input value to debounce
  delay?: number; // Optional debounce delay in milliseconds (default: 500ms)
};

const useDebounce = <T>({ value, delay = 500 }: useDebounceProps<T>): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Use a timeout to delay
    const handler = setTimeout(() => setDebouncedValue(value), delay);

    // Clean up timeout on value or delay change
    return () => clearTimeout(handler);
  }, [value, delay, setDebouncedValue]);

  return debouncedValue;
};

export default useDebounce;