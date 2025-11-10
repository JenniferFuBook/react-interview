import { BrowserRouter, Link, Routes, Route, Navigate } from 'react-router';
import { Suspense, lazy } from 'react';

// Lazy load each domain feature module
const CheckoutApp = lazy(() => import('../features/checkout/CheckoutApp'));
const UserProfileApp = lazy(() => import('../features/profile/UserProfileApp'));
const ProductInventoryApp = lazy(
  () => import('../features/products/ProductInventoryApp')
);

const ModularRouteApp = () => {
  return (
    <BrowserRouter>
      {/* Use Suspense to handle loading states for lazy-loaded components */}
      {/* This fallback can be customized to show a loading spinner or message */}
      {/* Here, we use a simple div with "Loading..." text as a placeholder */}
      {/* It can be replaced with a more sophisticated loading component if needed */}
      <Suspense fallback={<div>Loading...</div>}>
        {/* Define routes for each feature module */}
        {/* The root path redirects to the products page */}
        {/* Each feature module can have its own nested routes */}
        <nav
        style={{
          display: 'flex',
          gap: '10px',
          marginBottom: '20px',
        }}
      >
        <Link to="/checkout">Checkout</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/products">Products</Link>
      </nav>
        <Routes>
          <Route path="/" element={<Navigate to="/products" replace />} />
          <Route path="/checkout/*" element={<CheckoutApp />} />
          <Route path="/profile/*" element={<UserProfileApp />} />
          <Route path="/products/*" element={<ProductInventoryApp />} />
          <Route path="*" element={<div>404: Page Not Found</div>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default ModularRouteApp;
