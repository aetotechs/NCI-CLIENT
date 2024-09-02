import React from 'react';
import { IStatus } from '@/App';
import BreadCrumb from '@/components/BreadCrumb';
import Explore from '@/components/Explore';
import Footer from '@/components/Footer';
import Header from '@/components/Header';


function ShopPage({ status }: IStatus) {
  const breadcrumbItems = [{ href: '/shop-page', label: 'Shop' }];
  return (
    <div className="my-[40px] mx-10 md:mx-[130px] ">
      <Header status={status} />

      <div className="mt-36">
        {' '}
        <BreadCrumb items={breadcrumbItems} />
      </div>
      <div className="flex">
        <h3>Coffee Shop</h3>
        <div>Sort by</div>
      </div>
      <div className="md:flex gap-10">
        <div className="w-[372px] bg-white">
          <h5>Filter</h5>
        </div>
        <div>
          <Explore status={status} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ShopPage;
