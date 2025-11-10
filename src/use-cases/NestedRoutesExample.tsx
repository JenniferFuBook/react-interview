// This example is contained in a single file for simplicity.
// In a real-world application, you would split the components into separate files.

import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Link,
  useParams,
} from 'react-router';

const NestedRoutesExample = () => {
  return (
    // BrowserRouter wraps the entire app to enable routing functionality
    <BrowserRouter>
      <NavBar />
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

// Sample user list (should be fetched from an API in a real app)
const userList = [
  { id: 1, name: 'User 1' },
  { id: 2, name: 'User 2' },
  { id: 3, name: 'User 3' },
];

// Navigation bar component
const NavBar = () => (
  <nav
    style={{
      display: 'flex',
      gap: '10px',
    }}
  >
    <Link to="/">Home</Link>
    <Link to="/users">Users</Link>
  </nav>
);

// Page components for each route
const Home = () => <h1>Home Page</h1>;
const Users = () => (
  <div>
    <h2>Users Dashboard</h2>
    {userList.map((user) => (
      <div key={user.id}>
        {/* User Links */}
        <Link to={`/users/${user.id}`}>{user.name}</Link>
      </div>
    ))}
    {/* Link to create a new user */}
    <Link to="/users/new">Create a new user</Link>

    {/* Outlet renders child routes dynamically */}
    <Outlet />
  </div>
);

// Component to display individual user profiles inside Outlet
const UserProfile = () => {
  const { userId } = useParams();
  const user = userList.find((u) => u.id.toString() === userId);

  if (!user) {
    return <h3>You have selected an unknown user.</h3>;
  }

  return (
    <>
      <h3>You have selected this user:</h3>
      <div>ID: {user.id}</div>
      <div>Name: {user.name}</div>
    </>
  );
};

// Component for creating a new user inside Outlet
const NewUser = () => <h3>You choose to create a new user.</h3>;

export default NestedRoutesExample;
