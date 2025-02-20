import { useState } from 'react';

interface ItemListProps {
  initialItems: string[];
}

const RemoveItemList: React.FC<ItemListProps> = ({ initialItems = [] }) => {
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

const DeclarativeUiExample: React.FC = () => (
  <RemoveItemList initialItems={['Item 1', 'Item 2', 'Item 3']} />
);

export default DeclarativeUiExample;
