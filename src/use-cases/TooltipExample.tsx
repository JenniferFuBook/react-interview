import { useRef, useState } from 'react';
import Tooltip from '../components/tooltip/Tooltip';

interface Fruit {
  id: number;
  name: string;
  price: number;
}

const TooltipExample: React.FC = () => {
  const [fruits] = useState<Fruit[]>([
    { id: 1, name: 'Apple', price: 2.5 },
    { id: 2, name: 'Banana', price: 1.99 },
    { id: 3, name: 'Blueberry', price: 4 },
  ]);

  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);
  const fruitRefs = useRef<(HTMLSpanElement | null)[]>([]);

  return (
    <div>
      <h1>Fruit Catalog</h1>
      <ul>
        {fruits.map(({ id, name, price }, index) => (
          <li key={id}>
            <span
              ref={(el) => {
                fruitRefs.current[index] = el;
              }}
              onMouseEnter={() => setActiveTooltip(id)}
              onMouseLeave={() => setActiveTooltip(null)}
              // In a real-world component, a CSS file should be used instead of inline styles
              style={{ cursor: 'pointer', textDecoration: 'underline' }}
            >
              {name}
            </span>
            {activeTooltip === id && (
              <Tooltip
                text={`Price: $${price.toFixed(2)}`}
                ref={{ current: fruitRefs.current[index] as HTMLElement }}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TooltipExample;
