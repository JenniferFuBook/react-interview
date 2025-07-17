import { Routes, Route } from 'react-router';
import { CheckoutPage } from './CheckoutPage';

/**
 * This component represents the checkout application in a modular route setup.
 * It can be used as part of a larger application that uses React Router for navigation.
 * This component can be lazy-loaded in a modular route setup, allowing for better performance
 * and separation of concerns in a larger application. It can be used in conjunction with
 * other feature modules like user profile and product inventory, as shown in the ModularRouteApp example.
 */
export default function CheckoutApp() {
  return (
    <Routes>
      <Route path="/" element={<CheckoutPage />} />
    </Routes>
  );
}
