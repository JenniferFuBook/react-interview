import { useEffect, useState } from 'react';
import L, { LatLng } from 'leaflet';

const DEFAULT_POSITION = L.latLng(37.7749, -122.4194); // Default to San Francisco

/**
 * useCurrentPosition is a custom React hook that retrieves the user's current
 * geographic location using the browser's Geolocation API.
 * 
 * Key features:
 * - Returns a Leaflet LatLng object representing the current position.
 * - Falls back to a default position (San Francisco) if geolocation is not supported
 *   or if the user denies permission.
 * - Updates state asynchronously once the position is obtained.
 * - Can be used in context providers or components to initialize map views.
 * 
 * Performance note:
 * - The hook calls `navigator.geolocation.getCurrentPosition` only once on mount.
 * - Avoid calling this hook repeatedly in multiple components, as it may trigger
 *   multiple geolocation requests. Instead, use a context provider to share the
 *   current position across the app.
 */
export function useCurrentPosition() {
  // Define state to store the user’s current position
  const [currentPosition, setCurrentPosition] = useState<LatLng>();

  useEffect(() => {
    // If geolocation is not supported, fall back to the default position
    if (!navigator.geolocation) {
      setCurrentPosition(DEFAULT_POSITION);
      return;
    }

    // Call the browser’s Geolocation API to get the current position
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        // Update state with coordinates retrieved from the browser
        setCurrentPosition(L.latLng(pos.coords.latitude, pos.coords.longitude));
      },
      () => {
        // Fall back to the default position if the user denies geolocation or an error occurs
        setCurrentPosition(DEFAULT_POSITION);
      }
    );
  }, []);

  return currentPosition;
}
