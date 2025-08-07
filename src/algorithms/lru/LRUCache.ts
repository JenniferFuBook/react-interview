class LRUCache<K, V> {
  private cache: Map<K, V>;
  private capacity: number;
  constructor(capacity: number) {
    if (capacity <= 0) {
      throw new Error('Capacity must be greater than 0');
    }

    // Set the maximum number of entries the cache can hold
    this.capacity = capacity;
    // Use a Map which preserves insertion order to track usage
    this.cache = new Map();
  }

  // Retrieve a value from the cache
  get(key: K): V | -1 {
    // If key is not in cache, return -1 (miss)
    if (!this.cache.has(key)) {
      return -1;
    }

    // Remove and reinsert to mark as recently used
    const value = this.cache.get(key)!;
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  // Add or update a value in the cache
  put(key: K, value: V): void {
    // If the key already exists, delete it to update its position
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }

    // Add new or updated entry.
    this.cache.set(key, value);

    // If cache exceeds capacity, remove the least recently used item
    if (this.cache.size > this.capacity) {
      const lruKey = this.cache.keys().next().value;
      this.cache.delete(lruKey!);
    }
  }

  // Expose current cache state (for debugging/UI)
  entries(): [K, V][] {
    return Array.from(this.cache.entries());
  }
}

export default LRUCache;
