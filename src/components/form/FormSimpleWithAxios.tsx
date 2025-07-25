import { useActionState } from 'react';
import { FormState, FormData } from './types';
import './index.css';
import axios from 'axios';

const Form: React.FC = () => {
  const [state, formAction, isPending] = useActionState<FormState, FormData>(
    async (_prevState, formData: FormData) => {
      try {
        // Send the form data using fetch API
        const response = await axios.post('https://api.web3forms.com/submit', {
          access_key: formData.get('access_key'),
          name: formData.get('name'),
          email: formData.get('email'),
        });
        const data = response.data;
        // Handle success case
        return {
          data,
          error: null,
        };
      } catch (error) {
        // Handle any errors
        return {
          data: null,
          error: `There was a problem with your submission: ${error}`,
        };
      }
    },
    { data: null, error: null }
  );
  return (
    <form action={formAction}>
      <input
        type="hidden"
        name="access_key"
        value={import.meta.env.VITE_ACCESS_KEY}
      />
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        required
        pattern="[A-Za-z\s]+"
        title="Only letters and spaces allowed."
      />
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" required />
      <input type="submit" value="Submit" disabled={isPending} />
      {/* Show error message */}
      {state.error && <div>{state.error}</div>}
      {/* Show submission confirmation */}
      {state.data && (
        <div>Form submitted successfully: ${JSON.stringify(state.data)}</div>
      )}
    </form>
  );
};
export default Form;
