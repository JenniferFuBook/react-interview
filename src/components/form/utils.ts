// The function to validate name
export const validateName = (name: string): string | null => {
  if (!name) {
    return 'Please enter name.';
  }
  const nameRegex = /^[A-Za-z\s]+$/;
  if (!nameRegex.test(name)) {
    return 'Only letters and spaces allowed.';
  }
  return null;
};

// The function to validate email
export const validateEmail = (email: string): string | null => {
  if (!email) {
    return 'Please enter email.';
  }
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return 'Please enter a valid email address.';
  }
  return null;
};