import { HashRouter, Routes, Route } from 'react-router-dom';

import LoginPage from '@/pages/login';
import ForgotPasswordPage from '@/pages/forgot-password';
import LandingPage from '@/pages/landing-page';
import { Toaster } from '@/components/ui/sonner';
import Shop from '@/pages/shop';
import ShopAddress from '@/pages/shop-address';
import ShopPayment from '@/pages/shop-payment';
import ClosedOrder from '@/pages/close-shop';
import { useEffect, useState } from 'react';
import CoffeeShop from '@/pages/coffee-shop';
import ProductPage from '@/pages/product-page';
import Profile, { User } from '@/pages/profile';
import ResetPasswordPage from '@/pages/reset-password';
import VerifyEmail from '@/pages/verify-email';
import About from '@/pages/about-us';
import ContactUs from '@/pages/contact-us';
import OriginsPage from '@/pages/origins';
import Admin from '@/pages/admin-dashboard';
import Categories from './pages/categories';
import AdminOrigins from './pages/Admin-origins';
import CoffeeListings from './pages/coffee-listings';
import Orders from './pages/Orders';
import Transactions from './pages/transactions';
import Customers from './pages/customers';
import Analytics from './pages/analytics';
import Settings from './pages/settings';

import { isAuthenticated } from './lib/cookie';
import AdminRoute from './components/AdminRoute';
import UserCategoriesPage from './pages/UserCategories';
import VerifyOtp from './pages/verify-otp';
export interface IStatus {
  status: boolean;
  user?: User;
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const UserLoggedIn = isAuthenticated();
    setLoggedIn(UserLoggedIn);
  }, []);

  return (
    <>
      <Toaster />
      <HashRouter>
        <Routes>
          <Route index element={<LandingPage status={loggedIn} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/shop" element={<Shop status={loggedIn} />} />
          <Route path="/coffee-shop" element={<CoffeeShop status={loggedIn} />} />
          <Route path="/shipping-address" element={<ShopAddress status={loggedIn} />} />
          <Route path="/shop-payment" element={<ShopPayment status={loggedIn} />} />
          <Route path="/close-shop" element={<ClosedOrder status={loggedIn} />} />
          <Route path="/product/:productId" element={<ProductPage status={loggedIn} />} />
          <Route path="/profile" element={<Profile status={loggedIn} />} />
          <Route path="/about" element={<About status={loggedIn} />} />
          <Route path="/contact-us" element={<ContactUs status={loggedIn} />} />
          <Route path="/region/:originId" element={<OriginsPage status={loggedIn} />} />
          <Route path="/category/:categoryId" element={<UserCategoriesPage status={loggedIn} />} />

          <Route
            path="/admin"
            element={
              <AdminRoute>
                <Admin />
              </AdminRoute>
            }
          />
          <Route
            path="/categories"
            element={
              <AdminRoute>
                <Categories />
              </AdminRoute>
            }
          />
          <Route
            path="/admin-origins"
            element={
              <AdminRoute>
                <AdminOrigins />
              </AdminRoute>
            }
          />
          <Route
            path="/coffee-listings"
            element={
              <AdminRoute>
                <CoffeeListings />
              </AdminRoute>
            }
          />
          <Route
            path="/orders"
            element={
              <AdminRoute>
                <Orders />
              </AdminRoute>
            }
          />
          <Route
            path="/transactions"
            element={
              <AdminRoute>
                <Transactions />
              </AdminRoute>
            }
          />
          <Route
            path="/customers"
            element={
              <AdminRoute>
                <Customers />
              </AdminRoute>
            }
          />
          <Route
            path="/analytics"
            element={
              <AdminRoute>
                <Analytics />
              </AdminRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <AdminRoute>
                <Settings />
              </AdminRoute>
            }
          />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
