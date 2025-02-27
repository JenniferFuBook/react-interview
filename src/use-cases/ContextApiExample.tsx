// This example is contained in a single file for simplicity.
// In a real-world application, you would split the components into separate files.

import { createContext, useContext } from 'react';

type DataProps = {
  data: string;
};

// Create context
const DataContext = createContext<DataProps>({ data: '' });

// Parent component
const ParentComponent: React.FC = () => {
  const data = 'Hello from Parent!';

  return (
    <DataContext.Provider value={{ data }}>
      <div>
        <h1>Parent Component</h1>
        <ChildA />
      </div>
    </DataContext.Provider>
  );
};

// Child A component
const ChildA: React.FC = () => {
  return (
    <div>
      <h2>Child A Component</h2>
      <ChildB />
    </div>
  );
};

// Child B component
const ChildB: React.FC = () => {
  return (
    <div>
      <h3>Child B Component</h3>
      <ChildC />
    </div>
  );
};

// Child C component (deeply nested)
const ChildC: React.FC = () => {
  const data = useContext(DataContext); // Access context directly
  return (
    <div>
      <h4>Child C Component</h4>
      {/* Use the context value */}
      <p>{data.data}</p>
    </div>
  );
};

export default ParentComponent;
