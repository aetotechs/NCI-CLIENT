import { IStatus } from '@/App';
import AboutCoffee from '@/components/AboutCoffee';
import BreadCrumb from '@/components/BreadCrumb';
import CoffeeGrowth from '@/components/CoffeeGrowth';
import CoffeeGuide from '@/components/CoffeeGuide';
import CoffeeHistory from '@/components/CoffeeHistory';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ProductDetails from '@/components/ProductDetails';

import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

function ProductPage({ status }: IStatus) {
  const { productId } = useParams();
  const breadcrumbItems = [{ href: '/shop', label: 'Shop' }, { label: `${productId}` }];
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="md:px-[5vw] md:max-w-[100vw]  px-5   ">
      <Header status={status} />

        <div>
          <div className=" flex flex-col px-5 md:px-0 my-5 ">
            <div className="font font-semibold md:text-[26px] max-w-[]">{productId}</div>
            <div className="font-normal text-[15px] my-3 flex gap-1 items-center">
              <span>
                <img src="/icons/coffee-bean.svg" alt="Coffee Bean" />
              </span>
              <p className="font-normal text-[17px]"> Caramel,Berry,Choclate</p>
            </div>
          </div>
          <div className="grid grid-rows-2 md:grid-cols-5 gap-3  ">
            <div className="col-span-3 bg-map h-[300px] mx-5 bg-contain bg-no-repeat bg-center relative flex items-center justify-center">
              <div className=" flex items-center justify-center">
                <img src="/icons/location.svg" alt="location" className=" z-0" />
                <span className="font-normal">Nakuru</span>
              </div>
            </div>
            <div className="col-span-2">
              <ProductDetails />
            </div>
          </div>
          <div className="">
            <AboutCoffee />
          </div>
          <div className="">
            <CoffeeHistory />
          </div>
          <div>
            <CoffeeGrowth />
          </div>
          <div>
            <CoffeeGuide />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductPage;
