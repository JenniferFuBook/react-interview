import L from 'leaflet';

/**
 * A service function that queries the OpenStreetMap Nominatim API
 * to geocode a search string into latitude/longitude coordinates.
 * 
 * @param query - The search string provided by the user.
 * @returns A Leaflet LatLng object if a result is found, or null if no results.
 */
export async function locationService(query: string) {
  try {
    // Fetch geocoding results from the Nominatim API, ensuring the query string is safely encoded
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        query
      )}`
    );

    if (!res.ok) {
      console.error('Failed to fetch location.');
      return null;
    }

    const results = await res.json();

    if (results.length > 0) {
      const { lat, lon } = results[0];
      return L.latLng(parseFloat(lat), parseFloat(lon));
    }
    return null;
  } catch (err) {
    console.error('Error during location search:', err);
    return null;
  }
}