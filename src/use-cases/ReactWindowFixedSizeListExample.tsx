// This example is contained in a single file for simplicity.
// In a real-world application, you would split the components into separate files.

import { FixedSizeList, ListChildComponentProps } from 'react-window';

const Row: React.FC<ListChildComponentProps> = ({ index, style }) => (
  <div
    style={{
      ...style,
      boxSizing: 'border-box',
      border: '1px solid gray',
    }}
  >
    Row {index}
  </div>
);

const ReactWindowFixedSizeListExample: React.FC = () => {
  return (
    <FixedSizeList
      height={350} // height of the list
      itemCount={1000} // number of items in the list
      itemSize={30} // height of each item
      overscanCount={20} // number of items to render slightly outside of
      // the visible area to reduce or prevent a flash of empty space during scrolling.
      width="100%" // width of the list
    >
      {/* if list items are expensive to render, React.memo can be used to 
      generate the Row component to avoid unnecessary re-rendering */}
      {Row}
    </FixedSizeList>
  );
};
export default ReactWindowFixedSizeListExample;
