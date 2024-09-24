import { Link, useLocation, useNavigate } from 'react-router-dom';

import { IStatus } from '@/App';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';
import { AddToCart, FetchItems } from '@/lib/api-routes';
import { getAuthUser, getUserToken } from '@/lib/cookie';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

function Explore({ status }: IStatus) {
  const [addingStates, setAddingStates] = useState<{ [key: string]: boolean }>({});
  const [products, setProducts] = useState<any[]>([]);
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();

  const truncate = (lotNumber: string) => {
    return lotNumber.length > 10 ? lotNumber.slice(0, 10) + '...' : lotNumber;
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(FetchItems);
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          toast.error('Failed to fetch products', {
            style: {
              backgroundColor: '#F443361A',
              color: '#F44336',
              border: '1px solid #F4433680'
            }
          });
        }
      } catch (error) {
        toast.error('Error fetching products', {
          style: {
            backgroundColor: '#F443361A',
            color: '#F44336',
            border: '1px solid #F4433680'
          }
        });
      }
    };

    fetchProducts();
  }, [products]);

  const HandleClick = (name: string) => {
    navigate(`/product/${name}`);
  };

  const AddCart = async (productId: string, productName: string) => {
    console.log(`Adding ${productId}`);
    setAddingStates((prev) => ({ ...prev, [productId]: true }));
    const user = getAuthUser();
    const customerId = user.userId;
    const token = getUserToken();

    const cartData = {
      customerId,
      cartItems: [
        {
          productId,
          quantity: 0
        }
      ]
    };
    try {
      const response = await fetch(AddToCart, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(cartData)
      });

      if (response.ok) {

        const data=await response.json();
        const cartId=data.cartId;
        localStorage.setItem('cartId', cartId);
        
        toast.success(
          <div className="flex gap-1 items-center">
            <span>
              <img src="/icons/cartsuccess.svg" alt="cart" />
            </span>
            <span className="font-bold">{productName}</span> has been added to your cart.
          </div>,
          {
            style: {
              background: '#009A681A',

              color: '#009A68',
              border: '1px solid #009A6880'
            }
          }
        );
      } else {
        const error = await response.text();
        toast.error(error, {
          style: {
            backgroundColor: '#F443361A',
            color: '#F44336',
            border: '1px solid #F4433680'
          }
        });
      }
    } catch (error) {
      toast.error('Try Again Later', {
        style: {
          backgroundColor: '#F443361A',
          color: '#FFE6E6',
          border: '1px solid #F4433680'
        }
      });
    } finally {
      setAddingStates((prev) => ({ ...prev, [productId]: false }));
    }
  };
  return (
    <div className="my-10 md:my-0 px-5 ">
      {pathname === '/' && (
        <div className="flex justify-center flex-col items-center md:mb-2">
          <h3 className="font-semibold text-xl md:text-[26px] mt-4 md:mt-0">Explore Nile Coffee</h3>
          <p className="font-normal text-sm md:my-4">
            Discover the rich flavors and unique origins of Nile Coffee
          </p>
        </div>
      )}
      <div className={`${pathname === '/coffee-shop' ? 'py-0 ' : 'py-5 md:py-10'}`}>
        <div
          className={`${pathname == '/' ? 'grid md:grid-cols-2 md:gap-3 lg:grid-cols-3 gap-5' : 'flex  lg:gap-4 gap-5 md:gap-2 flex-wrap'}`}>
          {products.map((product, index) => {
            const isDisabled =
              product.stockAvailable === false &&
              product.sampleAvailable === false &&
              status === true;

            return (
              <div
                key={index}
                className={`   border rounded-[20px] flex flex-col  bg-white ${
                  isDisabled ? 'border-gray-300 bg-gray-100 text-gray-500' : 'border-primary/30'
                } ${pathname === '/coffee-shop' ? 'grow max-w-[300px]  px-5 py-2 ' : '  px-5  py-2 md:py-5'}
                  
                  `}
                style={{ pointerEvents: isDisabled ? 'none' : 'auto' }}>
                <div
                  className="font-medium text-[18px] mb-3 cursor-pointer"
                  onClick={() => HandleClick(product.name)}>
                  {product.name}
                </div>
                <div className="font-normal text-[15px] mb-3 flex gap-1 items-center">
                  <span>
                    <img src="icons/coffee-bean.svg" alt="Coffee Bean" />
                  </span>
                  <span className="font-normal text-[14px]"> {product.flavor}</span>
                </div>
                <div className="font-normal text-[16px] mb-3">
                  {status && (
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between">
                        <p className="text-primary">${product.unitPrice}/lb</p>
                        {product.sampleAvailable !== true && (
                          <Badge
                            variant="outline"
                            className="bg-badgebackground border-none font-normal flex items-center gap-1 h-[20px] text-[11px] rounded-[7px]">
                            <div className="h-[5px] w-[5px] rounded-full bg-destructive"></div>
                            <p className="text-destructive">Not Available</p>
                          </Badge>
                        )}
                      </div>
                      <div className="flex justify-between">
                        <p className="text-primary">${product.unitPrice}/bag</p>
                        {product.stockAvailable !== true && (
                          <Badge
                            variant="outline"
                            className="bg-badgebackground border-none font-normal flex items-center gap-1 h-[20px] text-[11px] rounded-[7px]">
                            <div className="h-[5px] w-[5px] rounded-full bg-destructive"></div>
                            <p className="text-destructive">Not Available</p>
                          </Badge>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex justify-between mb-4">
                  <p className="font-medium text-[15px]">{product.wareHouse}</p>
                  <p className="font-normal text-sm text-inactive">{truncate(product.lotNumber)}</p>
                </div>
                {status ? (
                  <div
                    className={`  ${pathname == '/coffee-shop' ? '  flex gap-2   md:flex-row  ' : 'flex flex-col md:flex-row justify-between  gap-3'}`}>
                    <Button
                      type="submit"
                      onClick={() => {
                        AddCart(product.itemId, product.name);
                      }}
                      className={`rounded-[10px] bg-primary grow  text-white font-normal text-[15px] h-10 md:h-[40px] ${pathname == '/coffee-shop' && 'h-[45px]   '}`}
                      disabled={isDisabled || addingStates[product.itemId]}>
                      {addingStates[product.itemId] ? 'Adding...' : 'Add to Cart'}
                    </Button>
                    <Button
                      className={`rounded-[10px] grow  h-10  md:h-[40px] text-primary font-normal text-[15px] bg-white border border-primary  ${pathname == '/coffee-shop' && 'h-[45px]    px-4 text-sm'}`}
                      disabled={isDisabled}>
                      Request Sample
                    </Button>
                  </div>
                ) : (
                  <Button className="py-5 h-10 md:h-12 rounded-[10px] my-5 ">
                    <Link to="/login"> Log In To Buy/Sample</Link>
                  </Button>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {pathname === '/' && (
        <div className="flex justify-center my-5 md:my-0">
          <Link
            className="flex justify-between items-center p-3 gap-2 border border-primary rounded-md text-primary font-semibold text-[16px] leading-5"
            to="/">
            View More
            <span>
              <ChevronRight />
            </span>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Explore;
