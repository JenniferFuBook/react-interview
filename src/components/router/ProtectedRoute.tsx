import { Navigate, Outlet } from 'react-router';

const ProtectedRoute = () => {
  const isValidUser = false; // Simulate user authentication

  if (!isValidUser) { // Redirect to the login page if the user is not authenticated
    return <Navigate to="/login" replace />;
  }

  return <Outlet />; // Render child routes if the user is authenticated
};

export default ProtectedRoute;