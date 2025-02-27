// This example is contained in a single file for simplicity.
// In a real-world application, you would split the components into separate files.

type DataProps = {
  data: string;
};

// Parent component
const ParentComponent: React.FC = () => {
  const data = 'Hello from Parent!';

  return (
    <div>
      <h1>Parent Component</h1>
      {/* Pass data to ChildA */}
      <ChildA data={data} />
    </div>
  );
};

// Child A component
const ChildA: React.FC<DataProps> = ({ data }) => {
  return (
    <div>
      <h2>Child A Component</h2>
      {/* Pass data to ChildB */}
      <ChildB data={data} />
    </div>
  );
};

// Child B component
const ChildB: React.FC<DataProps> = ({ data }) => {
  return (
    <div>
      <h3>Child B Component</h3>
      {/* Pass data to ChildC */}
      <ChildC data={data} />
    </div>
  );
};

// Child C component (deeply nested)
const ChildC: React.FC<DataProps> = ({ data }) => {
  return (
    <div>
      <h4>Child C Component</h4>
      {/* Use the data */}
      <p>{data}</p>
    </div>
  );
};

export default ParentComponent;
