import { useActionState } from 'react';
import { FormState, FormData } from './types';
import { validateName, validateEmail } from './utils';
import './index.css';

const Form: React.FC = () => {
  // Define the form state and action using useActionState hook
  const [state, formAction, isPending] = useActionState<FormState, FormData>(
    // Async function to handle form submission
    async (_prevState, formData: FormData) => {
      // Extract name from formData
      const name = formData.get('name') as string;
      // Extract email from formData
      const email = formData.get('email') as string;
      // Validate name with custom validation function
      // This function checks if the name is valid (e.g., only letters and spaces)
      const nameError = validateName(name);
      // If name validation fails, return error with fields
      if (nameError) {
        return {
          data: null,
          error: nameError,
          fields: {
            name,
            email,
          },
        };
      }
      // Validate email with custom validation function
      // This function checks if the email is valid (e.g., proper email format)
      const emailError = validateEmail(email);
      // If email validation fails, return error with fields
      if (emailError) {
        return {
          data: null,
          error: emailError,
          fields: {
            name,
            email,
          },
        };
      }
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
          fields: { // define fields with submitted values
            name,
            email,
          },
        };
      } catch (error) {
        // Handle any errors
        return {
          // No data on error
          data: null,
          // Set error message
          error: `There was a problem with your submission: ${error}`,
          // define fields with submitted values
          fields: {
            name,
            email,
          },
        };
      }
    },
    {
      // Initial state: no data, no error, and empty fields
      data: null,
      error: null,
      fields: {
        name: '',
        email: '',
      },
    }
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
        // Use defaultValue to pre-fill with submitted name
        defaultValue={state.fields!.name}
      />
      <label htmlFor="email">Email:</label> {/* Label for email input */}
      <input // Input field for email
        id="email"
        type="email"
        name="email"
        // Use defaultValue to pre-fill with submitted email
        defaultValue={state.fields!.email}
      />
      <input // The submission button
        type="submit"
        value="Submit"
        disabled={isPending} // Disable button while submitting
      />
      {/* Display the styled error if present */}
      {state.error && <div className="error">{state.error}</div>}
      {/* Display the styled success message with data */}
      {state.data && (
        <div className="success">
          Form submitted successfully: ${JSON.stringify(state.data)}
        </div>
      )}
    </form>
  );
};

export default Form;
