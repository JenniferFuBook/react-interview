// This example is contained in a single file for simplicity.
// In a real-world application, you would split the components into separate files.

import { Virtuoso, ItemContent, Components } from 'react-virtuoso';

const Row: ItemContent<string, string> = (index) => (
  <div
    style={{
      boxSizing: 'border-box',
      border: '1px solid gray',
    }}
  >
    Row {index}
  </div>
);

const Header: Components['Header'] = () => (
  <div style={{ height: 35, color: 'blue' }}>I am header</div>
);

const Footer: Components['Footer'] = () => (
  <div style={{ height: 35, color: 'green' }}>I am footer</div>
);

const ReactVirtuosoListExample: React.FC = () => {
  return (
    <Virtuoso
      style={{ height: 350 }} // height of the list
      totalCount={1000} // number of items in the list
      overscan={20} // number of items to render slightly outside of
      // the visible area to reduce or prevent a flash of empty space during scrolling.
      itemContent={Row} // function to render each row
      components={{ Header, Footer }} // custom header and footer components
    />
  );
};

export default ReactVirtuosoListExample;
