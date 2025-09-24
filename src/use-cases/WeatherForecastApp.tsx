import { PositionProvider } from '../components/weather-forecast-app/PositionContext';
import { MapDisplay } from '../components/weather-forecast-app/MapDisplay';
import 'leaflet/dist/leaflet.css';
import '../components/weather-forecast-app/index.css';

/**
 * WeatherForecastApp is the main entry point of the application.
 *
 * Key features:
 * - Wraps the entire app in PositionProvider so all child components
 *   can access and update the user's current geographic position.
 * - Renders the MapDisplay component, which includes the map, location
 *   marker, and search bar.
 * - Imports necessary CSS for Leaflet and custom styles.
 *
 * Usage:
 * Simply render <WeatherForecastApp /> in the root React component.
 */
const WeatherForecastApp = () => {
  // Wrap the entire app in PositionProvider to provide position context
  return (
    <PositionProvider>
      <MapDisplay />
    </PositionProvider>
  );
};

export default WeatherForecastApp;
