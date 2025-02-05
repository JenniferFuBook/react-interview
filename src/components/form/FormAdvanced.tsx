import { useActionState } from 'react';
import { FormState, FormData } from './types.ts';
import { validateName, validateEmail } from './utils.ts';
import './index.css';

const Form = () => {
  const [state, formAction, isPending] = useActionState<FormState, FormData>(
    async (prevState, formData: FormData) => {
      const name = formData.get('name') as string;
      const email = formData.get('email') as string;
      // Validate name
      const nameError = validateName(name);
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
      // Validate email
      const emailError = validateEmail(email);
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
        // Send the form data using fetch API
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData as BodyInit,
        });
        const data = await response.json();
        if (!data.success) {
          throw new Error(data.message);
        }
        // Handle success case
        return {
          data,
          error: null,
          fields: {
            name,
            email,
          },
        };
      } catch (error) {
        // Handle any errors
        return {
          data: null,
          error: `There was a problem with your submission: ${error}`,
          fields: {
            name,
            email,
          },
        };
      }
    },
    {
      data: null,
      error: null,
      fields: {
        name: '',
        email: '',
      },
    }
  );
  return (
    <form action={formAction}>
      <input
        type="hidden"
        name="access_key"
        value={import.meta.env.VITE_ACCESS_KEY}
      />
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" defaultValue={state.fields!.name} />
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" defaultValue={state.fields!.email} />
      <input type="submit" value="Submit" disabled={isPending} />
      {/* Show error message */}
      {state.error && <div className="error">{state.error}</div>}
      {/* Show submission confirmation */}
      {state.data && (
        <div className="success">
          Form submitted successfully: ${JSON.stringify(state.data)}
        </div>
      )}
    </form>
  );
}

export default Form;
