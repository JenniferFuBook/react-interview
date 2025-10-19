// This example is contained in a single file for simplicity.
// In a real-world application, you would split the components into separate files.

import { BrowserRouter, Routes, Route, Outlet } from 'react-router';

const NestedRoutesExample = () => {
  return (
    // BrowserRouter wraps the entire app to enable routing functionality
    <BrowserRouter>
      {/* The Routes component defines the routing structure */}
      <Routes>
        {/* Root route */}
        <Route path="/" element={<Home />} />
        {/* Parent route */}
        <Route path="users" element={<Users />}>
          {/* Child route for dynamic user profiles */}
          <Route path=":userId" element={<UserProfile />} />
          {/* Child route for creating new users */}
          <Route path="new" element={<NewUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const Home = () => <h1>Home Page</h1>;
const Users = () => (
  <div>
    <h2>Users Dashboard</h2>
    {/* Outlet renders child routes dynamically */}
    <Outlet />
  </div>
);
const UserProfile = () => <h3>User Profile Page</h3>;
const NewUser = () => <h3>Create New User Page</h3>;

export default NestedRoutesExample;
