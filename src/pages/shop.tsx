import { useEffect, useState } from 'react';
import EmptyCart from '@/components/EmptyCart';
import BreadCrumb from '@/components/BreadCrumb';
import Header from '@/components/Header';
import CartWithItems from '@/components/CartWithItems';
import Coupon from '@/components/Coupon';
import OrderSummary from '@/components/OrderSummary';
import Progress from '@/components/Progress';

import { IStatus } from '@/App';
import { useLocation } from 'react-router-dom';

function Shop({ status }: IStatus) {
  const [CartItems] = useState(false);
  const breadcrumbItems = [{ href: '/shop', label: 'Cart' }];
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="md:my-5 mx-auto md:w-[1232px] ">
        <Header status={status} />

        <div className="mt-10 px-5 md:px-0 ">
          {' '}
          <BreadCrumb items={breadcrumbItems} />
        </div>
        <div className="px-5 md:px-0">
          {CartItems === false ? (
            <div className="flex justify-center items-center  ">
              <EmptyCart status={status} />
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
    </>
  );
}

export default Shop;
