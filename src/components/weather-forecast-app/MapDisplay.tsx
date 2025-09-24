import { MapContainer, TileLayer } from 'react-leaflet';
import { usePosition } from './PositionContext';
import { LocationSearch } from './LocationSearch';
import { LocationMarker } from './LocationMarker';

/**
 * MapDisplay is the main map component that brings together the Leaflet map,
 * the search bar, and the location marker with weather forecast.
 * - Uses the current position from context to set the initial center.
 * - Renders a TileLayer from OpenStreetMap.
 * - Overlays the LocationSearch component for user input.
 * - Adds a LocationMarker to display the popup with weather information.
 */
export const MapDisplay = () => {
  // Get current position from context to initialize the map center
  const { position } = usePosition();
  return (
    // Main Leaflet map container--center is set from context
    <MapContainer className="map-container" center={position} zoom={5}>
      {/* Search bar overlay component */}
      <LocationSearch />

      {/* Base map layer provided by OpenStreetMap */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Marker that displays popup with weather forecast */}
      <LocationMarker />
    </MapContainer>
  );
};
