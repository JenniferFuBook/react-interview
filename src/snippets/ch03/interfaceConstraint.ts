interface User {
  id: number;
  name: string;
}

// Define a generic function that accepts a user object of any type T as long as T extends User
// (i.e., has at least id and name properties).
export function getUserInfo<T extends User>(user: T): string {
  return `ID: ${user.id}, Name: ${user.name}`;
}
