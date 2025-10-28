// This example is contained in a single file for simplicity.
// In a real-world application, you would split the components into separate files.

import { Grid, type CellComponentProps } from 'react-window';

const GridCell = ({ rowIndex, columnIndex, style }: CellComponentProps<{}>) => {
  const cellContent = `R${rowIndex}, C${columnIndex}`;
  return (
    <div
      role="gridcell"
      style={{
        ...style,
        border: '1px solid gray',
      }}
    >
      {cellContent}
    </div>
  );
};

const ReactWindowGridExample = () => {
  const getColumnWidth = (index: number) => Math.min(200, 50 + index * 10);
  const getRowHeight = (index: number) => Math.min(100, 20 + index * 20);

  return (
    <Grid
      cellComponent={GridCell}
      role="grid"
      columnCount={10} // number of columns
      rowCount={1000} // number of rows
      columnWidth={getColumnWidth} // function for column width
      rowHeight={getRowHeight} // function for row height
      overscanCount={20} // number of rows or columns to render slightly outside of the visible area
      style={{ height: 400, width: '100%' }} // height and width of the list container
      cellProps={{ width: 600, height: 400 }} // Pass extra data as needed
    />
  );
};

export default ReactWindowGridExample;
