import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { usePosition } from './usePosition';
import { locationService } from './locationService';

/**
 * LocationSearch is a React component that provides a search bar overlay
 * for the Leaflet map. Users can type a location name, which is geocoded
 * using the OpenStreetMap Nominatim API via the locationService utility.
 *
 * Key features:
 * - Updates the global map position via the PositionContext.
 * - Prevents map interactions (click and scroll) while typing or submitting.
 * - Clears the input field after a successful search.
 * - Handles errors and empty results gracefully.
 */
export const LocationSearch = () => {
  // Local state to store the search query
  const [query, setQuery] = useState('');

  // Access the setPosition function from context to update the map center
  const { setPosition } = usePosition();

  // Reference the form container to manage Leaflet event propagation
  const formRef = useRef<HTMLFormElement>(null);

  // Disable click and scroll propagation to prevent interfering with the map.
  useEffect(() => {
    const container = formRef.current;
    if (container) {
      L.DomEvent.disableClickPropagation(container);
      L.DomEvent.disableScrollPropagation(container);
    }
  }, []);

  // Handle the search form submission
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    setQuery(''); // Clear the input field after search
    if (query.trim().length === 0) {
      return;
    }

    // Call the location service to geocode the query string
    const queriedPosition = await locationService(query);
    if (queriedPosition) {
      setPosition(queriedPosition);
    }

  };

  return (
    // Render the search form overlay on the map
    <form className="location-search" ref={formRef} onSubmit={handleSearch}>
      <input
        id="search-bar"
        type="text"
        value={query}
        placeholder="Search location..."
        // Update the query state as the user types
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Go</button>
    </form>
  );
};
