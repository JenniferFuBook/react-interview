import type { LatLngExpression } from 'leaflet';
import { useEffect, useState } from 'react';
import type { ForecastData } from './WeatherForecastTypes';

/**
 * useWeatherForecast is a custom React hook that fetches hourly weather 
 * forecast data for a given geographic position using the National Weather 
 * Service API, while managing loading and error states.
 * 
 * Key features:
 * - Accepts a Leaflet LatLngExpression (or null) as the location.
 * - Returns the forecast data, a loading state, and an error message if any.
 * - Fetches metadata for the given position, then uses it to retrieve
 *   the hourly forecast.
 * - Positions outside the United States may not have forecast data available.
 *   In such cases, the hook will return an error state that can be displayed
 *   in the UI.
 * 
 * Usage:
 * const { forecast, loading, error } = useWeatherForecast(position);
 */
export const useWeatherForecast = (position: LatLngExpression | null) => {
  // Define state to hold the forecast data
  const [forecast, setForecast] = useState<ForecastData | null>(null);

  // Track the loading state during fetch operations
  const [loading, setLoading] = useState(false);

  // Track any errors that occur during fetching
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!position) {
      return;
    }

    // Use AbortController to cancel in-progress requests when position changes or component unmounts.
    const abortController = new AbortController();

    const fetchWeather = async () => { // Define an async function to fetch weather data
      try {
        setLoading(true);
        setError(null);

        const [lat, lon] = Array.isArray(position)
          ? position
          : [position.lat, position.lng];

        // Step 1: Fetch metadata for the given coordinates
        const metadataRes = await fetch(
          `https://api.weather.gov/points/${lat},${lon}`,
          { signal: abortController.signal }
        );
        if (!metadataRes.ok) {
          console.error('Failed to fetch weather metadata');
          setError('Failed to fetch weather metadata.');
          return;
        }

        const metadata = await metadataRes.json();

         if (!metadata.properties.forecastHourly) {
          console.error('Failed to fetch metadata json value');
          setError('Failed to fetch metadata json value.');
          return;
        }

        // Step 2: Fetch the hourly forecast URL from the metadata
        const forecastRes = await fetch(metadata.properties.forecastHourly, {
          signal: abortController.signal,
        });
        if (!forecastRes.ok) {
          console.error('Failed to fetch hourly forecast');
          setError('Failed to fetch hourly forecast.');
          return;
        }

        const forecastData: ForecastData = await forecastRes.json();

        setForecast(forecastData);
      } catch (err) {
        console.error((err as Error).message);
        setError('Failed to fetch forecast.');
      } finally {
        setLoading(false);
      }
      // Cleanup: abort pending fetch requests when effect dependencies change or component unmounts
      return () => {
        abortController.abort();
      };
    };

    fetchWeather();
  }, [position]);

  return { forecast, loading, error };
};
