import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from '@/pages/login';
import ForgotPasswordPage from '@/pages/forgot-password';
import LandingPage from '@/pages/landing-page';
import { Toaster } from '@/components/ui/sonner';
import Shop from '@/pages/shop';
import ShopAddress from '@/pages/shop-address';
import ShopPayment from '@/pages/shop-payment';
import ClosedOrder from '@/pages/close-shop';
import ShopItems from '@/pages/shop-items';
import { useState } from 'react';
import CoffeeShop from '@/pages/coffee-shop';
import ProductPage from '@/pages/product-page';
import Profile from '@/pages/profile';
import ResetPasswordPage from '@/pages/reset-password';
import VerifyEmail from '@/pages/verify-email';
export interface IStatus {
  status: boolean;
}

function App() {
  const [loggedIn] = useState(false);
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage status={loggedIn} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/shop" element={<Shop status={loggedIn} />} />
          <Route path="/coffee-shop" element={<CoffeeShop status={loggedIn} />} />
          <Route path="/shop-items" element={<ShopItems status={loggedIn} />} />
          <Route path="/shipping-address" element={<ShopAddress status={loggedIn} />} />
          <Route path="/shop-payment" element={<ShopPayment status={loggedIn} />} />
          <Route path="/close-shop" element={<ClosedOrder status={loggedIn} />} />
          <Route path="/product/:productId" element={<ProductPage status={loggedIn} />} />
          <Route path="/profile" element={<Profile status={loggedIn} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
