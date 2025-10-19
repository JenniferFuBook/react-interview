// This example is contained in a single file for simplicity.
// In a real-world application, you would split the components into separate files.

// CSS styles
const styles = `
  .button { /* Specificity: 0-1-0 (class) */
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }

  .primary-button { /* Specificity: 0-1-0 (class) */
    background-color: blue;
    color: white;
  }

  button { /* Specificity: 0-0-1 (element) */
    background-color: red;
    color: black;
  }

  .container .primary-button { /* Specificity: 0-2-0 (two classes) */
    background-color: green;
  }

  #my-button { /* Specificity: 1-0-0 (ID) */
    color: yellow;
  }
`;

interface ButtonProps {
  children: React.ReactNode;
  id: string;
}

const Button = ({ children, id }: ButtonProps) => (
  <button className="button primary-button" id={id}>
    {children}
  </button>
);

const CssSpecificityExample = () => (
  <div className="container">
    <style>{styles}</style>
    <Button id="my-button">Click me</Button>
  </div>
);

export default CssSpecificityExample;
