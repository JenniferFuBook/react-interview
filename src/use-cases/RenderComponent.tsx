import {
  Profiler,
  ProfilerOnRenderCallback,
  createContext,
  use,
  useState,
} from 'react';

// Define the type for the ThemeContext
const ThemeContext = createContext<string>('black');

// Profiler callback function
const onRenderCallback: ProfilerOnRenderCallback = (
  id: string,
  phase: 'mount' | 'update' | 'nested-update',
  actualDuration: number,
  baseDuration: number,
  startTime: number,
  commitTime: number
): void => {
  // Log the render details
  console.log(`
    id: ${id}
    phase: ${phase}
    actualDuration: ${actualDuration}
    baseDuration: ${baseDuration}
    startTime: ${startTime}
    commitTime: ${commitTime}
  `);
};

// Child Component
const ChildComponent: React.FC = () => {
  const theme = use(ThemeContext); // Consume context value
  return (
    <Profiler id="ChildComponent" onRender={onRenderCallback}>
      <div style={{ color: theme }}>I am the Child Component!</div>
    </Profiler>
  );
};

// Parent Component
interface ParentComponentProps {
  count: number;
}

const ParentComponent: React.FC<ParentComponentProps> = ({ count }) => {
  // Receive count as a prop
  return (
    <div>
      <h2>Parent Component</h2>
      <p>Count: {count}</p>
      <Profiler id="ParentComponent" onRender={onRenderCallback}>
        <ChildComponent />
      </Profiler>
    </div>
  );
};

// Main app component
const RenderComponent: React.FC = () => {
  const [count, setCount] = useState<number>(0); // Track the count state
  const [theme, setTheme] = useState<string>('black'); // Tract the theme state

  return (
    <Profiler id="mainAppComponent" onRender={onRenderCallback}>
      <ThemeContext.Provider value={theme}>
        <>
          <h1>React Profiler Example</h1>
          {/* Parent re-renders due to state change */}
          <button onClick={() => setCount(count + 1)}>Increment Count</button>

          {/* Context change triggers re-render */}
          <button
            onClick={() => setTheme(theme === 'black' ? 'blue' : 'black')}
          >
            Toggle Theme
          </button>

          {/* Pass count as a prop to demonstrate prop changes */}
          <ParentComponent count={count} />
        </>
      </ThemeContext.Provider>
    </Profiler>
  );
};

export default RenderComponent;
