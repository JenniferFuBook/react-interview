// This example is contained in a single file for simplicity.
// In a real-world application, you would split the components into separate files.

import { List, type RowComponentProps } from 'react-window';

const RowComponent = ({ index, style }: RowComponentProps<{}>) => (
  <div
    role="listitem"
    style={{
      ...style,
      boxSizing: 'border-box',
      border: '1px solid gray',
    }}
  >
    Row {index}
  </div>
);

const ReactWindowListExample = () => {
  return (
    <List
      rowComponent={RowComponent}
      role="list"
      rowCount={1000} // number of items
      rowHeight={30} // height of each item
      overscanCount={20} // number of items to render slightly outside of
      // the visible area to reduce or prevent a flash of empty space during scrolling.
      style={{ height: 350, width: '100%' }} // height and width of the list container
      rowProps={{}} // Pass extra data as needed
    />
  );
};

export default ReactWindowListExample;
