import { Separator } from '@/components/ui/separator';
import Counter from './Counter';
import { Button } from './ui/button';
import { Bookmark } from 'lucide-react';
import { useState } from 'react';
import { getAuthUser, getUserToken } from '@/lib/cookie';
import { toast } from 'sonner';
import { AddToCart } from '@/lib/api-routes';

function ProductDetails({ product }: { product: any }) {
  const [addingStates, setAddingStates] = useState<{ [key: string]: boolean }>({});

  const AddCart = async (productId: string, productName: string) => {
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
        const data = await response.json();
        const cartId = data.cartId;
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
      }
    } catch (error) {
    } finally {
      setAddingStates((prev) => ({ ...prev, [productId]: false }));
    }
  };
  return (
    <div className="bg-white rounded-[8px]  md:mx-0 w-[90vw] md:w-full">
      <div className="bg-white px-5">
        <div className="flex items-center gap-2 pt-4 ">
          <h3 className="font-semibold text-xl">$2.83/lb</h3>
          <div className="font-light text-[15px] mt-2">$374/bag</div>
        </div>
        <div className="flex flex-col gap-1 my-3">
          <div className="flex justify-between">
            <div className="font-normal text-[15px] text-[#585962]">Bag Weight</div>
            <div className="font-medium text-[15px]">60kg Bag</div>
          </div>
          <div className="flex justify-between">
            <div className="font-normal text-[15px] text-[#585962]">Harvest Season</div>
            <div className="font-medium text-[15px]">2023/24</div>
          </div>
          <div className="flex justify-between">
            <div className="font-normal text-[15px] text-[#585962]">Status</div>
            <div className="font-medium text-[15px]">Spot</div>
          </div>
          <div className="flex justify-between">
            <div className="font-normal text-[15px] text-[#585962]">Lot Number</div>
            <div className="font-medium text-[15px]">P611992-2</div>
          </div>
          <div className="flex justify-between">
            <div className="font-normal text-[15px] text-[#585962]">Warehouse </div>
            <div className="font-medium text-[15px]">Alameda, CA</div>
          </div>
          <div className="flex justify-between">
            <div className="font-normal text-[15px] text-[#585962]">Availability</div>
            <div>
              <div className="flex justify-end gap-2">
                <h5 className="font-medium text-[15px]">Bags</h5>{' '}
                <span className="text-green-500">(Available)</span>
              </div>
              <div className="flex gap-2">
                <h5 className="font-medium text-[15px]">Samples</h5>{' '}
                <span className="text-[#f44336]">(Not Available)</span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-3 md:flex-row md:my-3 m    md:justify-between ">
              <Counter className="h-[32px] md:w-[104px] text-[15px] rounded-[6px] text-textcolor" />
              <Button
                className="h-[32px] md:w-[157px] bg-primary text-white font-medium text-[15px]"
                onClick={() => {
                  AddCart(product.itemId, product.name);
                }}
              >
                {addingStates[product.itemId] ? 'Adding...' : 'Add to Cart'}
              </Button>
              <Button className="h-[32px] md:w-[157px] bg-white text-primary font-medium text-[15px] border border-primary">
                Request Sample
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full my-4">
        <Separator />
      </div>
      <div className="text-textcolor flex items-center gap-2 pb-4 px-5">
        <Bookmark className="h-4 w-4" />
        <span className="font-normal text-[13px]">Save item for later</span>
      </div>
    </div>
  );
}

export default ProductDetails;
