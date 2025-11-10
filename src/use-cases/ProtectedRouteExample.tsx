// This example is contained in a single file for simplicity.
// In a real-world application, you would split the components into separate files.

import { BrowserRouter, Routes, Route, Link } from 'react-router';
import ProtectedRoute from '../components/router/ProtectedRoute';

const ProtectedRouteExample = () => {
  return (
    // BrowserRouter wraps the entire app to enable routing functionality
    <BrowserRouter>
      {/* Navigation menu uses Link components for client-side navigation */}
      <nav
        style={{
          display: 'flex',
          gap: '10px',
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* The Routes component defines the routing structure */}
      <Routes>
        {/* Individual Route components map paths to elements (components) */}
        <Route path="/" element={<Home />} />
        {/* Login route is displayed if the user is not authenticated */}
        <Route path="/login" element={<Login />} />
        {/* ProtectedRoute is a custom component that checks if the user is authenticated */}
        <Route element={<ProtectedRoute />}>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        {/* Catch-all route for 404 errors */}
        <Route path="*" element={<NotFound />} />{' '}
      </Routes>
    </BrowserRouter>
  );
};

// Page components for each route
const Home = () => <h1>Home Page</h1>;
const Login = () => <h1>Login Page</h1>;
const About = () => <h1>About Page</h1>;
const Contact = () => <h1>Contact Page</h1>;
const NotFound = () => <h1>404: Page Not Found</h1>;

export default ProtectedRouteExample;
