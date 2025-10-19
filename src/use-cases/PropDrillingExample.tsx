// This example is contained in a single file for simplicity.
// In a real-world application, you would split the components into separate files.

import './PropDrillingExample.css';

type DataProps = {
  data: string;
};

// Parent component
const ParentComponent = () => {
  const data = 'Hello from Parent!';

  return (
    <div className='prop-drilling'>
      <h1>Parent Component</h1>
      {/* Pass data to ChildA */}
      <ChildA data={data} />
    </div>
  );
};

// Child A component
const ChildA = ({ data }: DataProps) => {
  return (
    <div>
      <h2>Child A Component</h2>
      {/* Pass data to ChildB */}
      <ChildB data={data} />
    </div>
  );
};

// Child B component
const ChildB = ({ data }: DataProps) => {
  return (
    <div>
      <h3>Child B Component</h3>
      {/* Pass data to ChildC */}
      <ChildC data={data} />
    </div>
  );
};

// Child C component (deeply nested)
const ChildC = ({ data }: DataProps) => {
  return (
    <div>
      <h4>Child C Component</h4>
      {/* Use the data */}
      <p>{data}</p>
    </div>
  );
};

export default ParentComponent;
