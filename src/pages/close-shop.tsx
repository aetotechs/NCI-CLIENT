import Header from '@/components/Header';

import OrderSummary from '@/components/OrderSummary';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Footer from '@/components/Footer';
import { IStatus } from '@/App';
import { useEffect } from 'react';
import { Address } from '@/components/ShippingAddress';

// const Address = {
//   name: 'Rahmah Nanyonga',
//   companyName: 'LTA Farm Logistics ltd',
//   tel: '0709742563',
//   email: 'nanah@nanah.',
//   street: 'Speke Road',
//   country: 'Uganda',
//   city: 'Enttebe',
//   zipcode: '12345'
// };

function ClosedOrder({ status }: IStatus) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <div className="md:px-[5vw] md:max-w-[100vw]    ">
        <Header status={status} />

        <div className="overflow-hidden">
          <div className=" px-5  md:my-10 md:px-4 flex flex-col md:flex-row gap-9 md:gap-20  md:place-content-center my-5">
            <div className="">
              <div className="md:w-[50vw]  ">
                <div className="flex items-center gap-2 mb-4">
                  <div className="rounded-full w-[40px] h-[40px] bg-iconbackground flex items-center justify-center">
                    <Check className="text-white h-10 w-8" />
                  </div>
                  <h3 className="font-semibold text-xl md:text-2xl leading-10">
                    Thank you for your order!
                  </h3>
                </div>
                <div>
                  <p className="text-sm md:pr-7  mb-4 text-textmuted">
                    Your order has been received. We will notify you by email once your order has
                    been shipped
                  </p>
                  <div className="w-[416px] text-sm ">
                    <h5 className="md:font-semibold font-medium text-base md:text-[18px] leading-tight mb-2">
                      Shipping Address
                    </h5>
                    <div className="flex my-1 gap-1 ">
                      <h6 className="text-[#616161]">Name:</h6>
                      <p>{Address?.lastName} <span>{Address?.firstName}</span></p>
                    </div>
                    <div className="flex  my-1 gap-1">
                      <h6 className="text-[#616161]">Company:</h6>
                      <p>{Address?.company}</p>
                    </div>
                    <div className="flex  my-1 gap-1">
                      <h6 className="text-[#616161]">Address:</h6>
                      <p className='flex gap-1'>
                        {Address?.address?.street} {Address?.address?.city} {Address?.address?.zipcode} {Address?.address?.country}
                      </p>
                    </div>
                    <div className="flex  my-1 gap-1">
                      <h6 className="text-[#616161]">Tel:</h6>
                      <p>{Address.workPhone}</p>
                    </div>
                    <div className="flex  my-1 gap-1">
                      <h6 className="text-[#616161]">Email:</h6>
                      <p>{Address.email}</p>
                    </div>
                  </div>
                  <div>
                    <Link to="/coffee-shop">
                      <Button
                        variant="outline"
                        className="border border-primary bg-white h-[44px] md:w-[207px] mt-2 md:my-6 font-medium text-primary"
                      >
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-[30vw] bg-white max-h-max   ">
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClosedOrder;
