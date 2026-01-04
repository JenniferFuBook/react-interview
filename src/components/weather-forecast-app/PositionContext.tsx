import type { LatLngExpression } from 'leaflet';
import {
  createContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import { useCurrentPosition } from './useCurrentPosition';

/**
 * PositionContext manages the user's current geographic location
 * and provides it to any component that needs it.
 *
 * Key features:
 * - Uses a custom hook (`useCurrentPosition`) to get the initial geolocation.
 * - Stores the position in state and updates it dynamically.
 * - Provides `position` and `setPosition` via React Context.
 * - Ensures child components only render once a valid position exists.
 */
export type PositionContextType = {
  position: LatLngExpression;
  setPosition: React.Dispatch<React.SetStateAction<LatLngExpression>>;
};

// Create a context for storing the user's current map position
export const PositionContext = createContext<PositionContextType | undefined>(
  undefined
);

type PositionProviderProps = {
  children: ReactNode;
};

export const PositionProvider = ({ children }: PositionProviderProps) => {
  // Retrieve the current geolocation using a custom hook
  const currentPosition = useCurrentPosition();

  // Define state to hold the current position, initialized as null
  const [position, setPosition] = useState<LatLngExpression | null>(null);

  // Update the position state whenever the geolocation changes (e.g., initial load)
  useEffect(() => {
    if (currentPosition) {
      setPosition(currentPosition);
    }
  }, [currentPosition]);

  if (!position) { // Render nothing until a position is available
    return null;
  }

  // Provide the position and setter function to all child components
  return (
    <PositionContext.Provider
      value={{
        position,
        setPosition: setPosition as React.Dispatch<
          React.SetStateAction<LatLngExpression>
        >,
      }}
    >
      {children}
    </PositionContext.Provider>
  );
};
