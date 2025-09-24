import { useEffect, useRef } from 'react';
import { useMapEvents, Marker, Popup } from 'react-leaflet';
import { usePosition } from './PositionContext';
import { useWeatherForecast } from './useWeatherForecast';
import { WeatherForecastDisplay } from './WeatherForecastDisplay';

/**
 * LocationMarker is a component that displays a marker on the map along with 
 * a popup containing the weather forecast for the current position.
 * 
 * Key features:
 * - Subscribes to the position from the PositionContext.
 * - Updates the position when the user clicks on the map.
 * - Fetches weather forecast data for the current position.
 * - Smoothly pans the map to the marker and automatically opens the popup.
 * - Handles loading and error states while fetching weather data.
 */
export const LocationMarker = () => {
  // Access position and setPosition from context to manage map state
  const { position, setPosition } = usePosition();

  // Reference the marker to programmatically control the popup
  const markerRef = useRef<L.Marker>(null);

  // Register map click events to update the position when the user clicks
  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng);
    },
  });

  // Fetch the weather forecast for the current position
  const { forecast, loading, error } = useWeatherForecast(position);

  useEffect(() => {
    if (position) {
      // Pan smoothly to the updated position while preserving zoom
      map.flyTo(position, map.getZoom());

      // Open the popup automatically when position or forecast updates
      setTimeout(() => markerRef.current?.openPopup(), 0);
    }
  }, [position, map, forecast, loading, error]);

  return (
    <Marker position={position} ref={markerRef}>
      <Popup
        autoPan={true} // Enable automatic panning to keep the popup in view
        autoPanPadding={[50, 50]} // Apply padding to prevent the popup from hitting map edges
      >
        {/* Handle loading, error, and success states for the forecast */}
        {!position || loading || !forecast ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Failed to get a weather forecast.</div>
        ) : (
          <WeatherForecastDisplay forecast={forecast} />
        )}
      </Popup>
    </Marker>
  );
};
