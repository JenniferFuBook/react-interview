import { useState, useLayoutEffect, RefObject } from 'react';
import { simulateHeavyPaint } from './utils'; 

const DELAY = 100; // Simulated delay for heavy paint operation

type Position = {
  top: number;
  left: number;
};

type TooltipProps = {
  text: string;
  ref: RefObject<HTMLElement>;
};

const Tooltip = ({ text, ref }: TooltipProps) => {
  const [position, setPosition] = useState<Position>({ top: 0, left: 0 });

  // useLayoutEffect should be used when you need to read from the DOM and 
  // synchronously apply the changes before the browser has a chance to paint
  useLayoutEffect(() => { 
    simulateHeavyPaint(DELAY); // Simulate a heavy paint operation
    if (ref.current) {
      // Calculate and set the position of the tooltip
      const rect = ref.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
  }, [ref]);

  return (
    <div
      style={{ // In a real-world component, a CSS file should be used instead of inline styles
        position: 'absolute',
        ...position,
        background: 'white',
        border: '1px solid blue',
        padding: '5px',
      }}
    >
      {text}
    </div>
  );
};

export default Tooltip;
