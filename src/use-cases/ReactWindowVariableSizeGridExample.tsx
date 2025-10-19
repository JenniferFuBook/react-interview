// This example is contained in a single file for simplicity.
// In a real-world application, you would split the components into separate files.

import { VariableSizeGrid, GridChildComponentProps } from 'react-window';

const GridItem = ({
  columnIndex,
  rowIndex,
  style,
}: GridChildComponentProps) => {
  const cellContent = `R${rowIndex}, C${columnIndex}`;
  return (
    <div
      style={{
        ...style,
        border: '1px solid gray',
      }}
    >
      {cellContent}
    </div>
  );
};

const ReactWindowVariableSizeGridExample = () => {
  const columnWidth = (index: number) => Math.min(200, 50 + index * 10);
  const rowHeight = (index: number) => Math.min(100, 20 + index * 20);

  return (
    <VariableSizeGrid
      rowCount={1000} // number of rows
      columnCount={10} // number of columns
      columnWidth={columnWidth} // function to get the width of each column
      rowHeight={rowHeight} // function to get the height of each row
      width={600} // width of the grid
      height={400} // height of the grid
      overscanRowCount={20} // number of rows to render slightly outside of the visible area
      overscanColumnCount={2} // number of columns to render slightly outside of the visible area
    >
      {GridItem}
    </VariableSizeGrid>
  );
};

export default ReactWindowVariableSizeGridExample;
