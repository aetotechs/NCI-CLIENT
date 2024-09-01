import React, { useState } from 'react';
import EmptyCart from '@/components/EmptyCart';
import BreadCrumb from '@/components/BreadCrumb';
import Header from '@/components/Header';
import CartWithItems from '@/components/CartWithItems';
import Coupon from '@/components/Coupon';
import OrderSummary from '@/components/OrderSummary';
import Progress from '@/components/Progress';
import Footer from '@/components/Footer';

function Shop() {
  const [CartItems, setCartItems] = useState(false);
  const breadcrumbItems = [{ href: '/shop', label: 'Cart' }];

  return (
    <>
      <div className="my-[40px] mx-10 md:mx-[104px]   ">
        <Header />

        <div className="mt-36">
          {' '}
          <BreadCrumb items={breadcrumbItems} />
        </div>
        <div>
          {CartItems === false ? (
            <div className="flex justify-center items-center  ">
              <EmptyCart />
            </div>
          ) : (
            <>
              <div className=" flex justify-center  ">
                <Progress />
              </div>
              <div className="h-screen grid grid-cols-5 gap-5 place-content-center">
                <div className="col-span-3">
                  {' '}
                  <CartWithItems />
                </div>
                <div className="col-span-2">
                  <Coupon />
                  <OrderSummary />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Shop;
