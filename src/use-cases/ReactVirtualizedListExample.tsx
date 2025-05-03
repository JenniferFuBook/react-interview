// This example is contained in a single file for simplicity.
// In a real-world application, you would split the components into separate files.

import { AutoSizer, List, ListRowRenderer } from 'react-virtualized';

const Row: ListRowRenderer = ({ index, style }) => {
  return (
    <div
      style={{
        ...style,
        boxSizing: 'border-box',
        border: '1px solid gray',
      }}
      key={index}
    >
      Row {index}
    </div>
  );
};

const ReactVirtualizedListExample: React.FC = () => {
  return (
    <AutoSizer disableHeight> 
      {/* AutoSizer automatically sets the width of the list
          based on the width of the parent container. */}
      {({ width }) => (
        <List
          height={350} // height of the list
          rowCount={1000} // number of rows in the list
          rowHeight={30} // height of each row
          rowRenderer={Row} // function to render each row
          overscanRowCount={20} // number of items to render slightly outside of
          // the visible area to reduce or prevent a flash of empty space during scrolling.
          width={width} // width of the list
        />
      )}
    </AutoSizer>
  );
}

export default ReactVirtualizedListExample;
