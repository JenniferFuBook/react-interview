import { useActionState } from 'react';
import { FormState, FormData } from './types';

const Form: React.FC = () => {
  // Define the form state and action using useActionState hook
  const [state, formAction, isPending] = useActionState<FormState, FormData>(
    // Async function to handle form submission
    async (_prevState, formData: FormData) => {
      try {
        // POST request to submit form data
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData as BodyInit, // Cast formData to BodyInit for fetch
        });
        const data = await response.json(); // Parse the response as JSON
        // Check if submission was unsuccessful
        if (!data.success) {
          throw new Error(data.message); // Throw error with message from response
        }
        // Handle success case
        return {
          data, // Set the returned data
          error: null, // No error
        };
      } catch (error) {
        // Handle any errors
        return {
          // No data on error
          data: null,
          // Set error message
          error: `There was a problem with your submission: ${error}`,
        };
      }
    },
    { data: null, error: null } // Initial state: no data, no error
  );
  return (
    // Form element with action handler
    <form action={formAction}>
      <input // Input field for access key
        type="hidden"
        name="access_key"
        // Access key from environment variable
        value={import.meta.env.VITE_ACCESS_KEY}
      />
      <label htmlFor="name">Name:</label> {/* Label for name input */}
      <input // Input field for name
        id="name"
        type="text"
        name="name"
        required // Field is required
        pattern="[A-Za-z\s]+" // Only letters and spaces allowed
        title="Only letters and spaces allowed." // Tooltip for invalid input
      />
      <label htmlFor="email">Email:</label> {/* Label for email input */}
      <input // Input field for email
        id="email"
        type="email"
        name="email"
        required // Field is required
      />
      <input // The submission button
        type="submit"
        value="Submit"
        disabled={isPending} // Disable button while submitting
      />
      {/* Display error if present */}
      {state.error && <div>{state.error}</div>}
      {/* Display success message with data */}
      {state.data && (
        <div>Form submitted successfully: ${JSON.stringify(state.data)}</div>
      )}
    </form>
  );
};
export default Form;
