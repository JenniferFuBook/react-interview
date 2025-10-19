// This example is contained in a single file for simplicity.
// In a real-world application, you would split the components into separate files.

import { useState } from 'react';

interface ItemListProps {
  initialItems: string[];
}

const RemoveItemList = ({ initialItems = [] }: ItemListProps) => {
  const [items, setItems] = useState(initialItems);
  const removeItem = () => {
    setItems((prevItems) => prevItems.slice(0, -1));
  };

  return (
    <>
      <button disabled={items.length === 0} onClick={removeItem}>
        Remove Item
      </button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

const DeclarativeUiExample = () => (
  <RemoveItemList initialItems={['Item 1', 'Item 2', 'Item 3']} />
);

export default DeclarativeUiExample;
