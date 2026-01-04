import { useContext } from 'react';
import { PositionContext } from './PositionContext';

/**
 * Custom hook to access the position context.
 * Throws an error if used outside of PositionProvider.
 */
export const usePosition = () => {
  const context = useContext(PositionContext);
  if (!context) {
    throw new Error('usePosition must be used within a PositionProvider');
  }
  return context;
};
