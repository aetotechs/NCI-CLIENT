import React from 'react';
import { SearchIcon, ShoppingCart } from 'lucide-react';
import NavItems from '@/components/NavItems';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { AccountPopover } from '@/components/Account';
import { IStatus } from '@/App';

function Header({ status }: IStatus) {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="bg-white flex justify-between p-5 rounded-[30px] z-10 drop-shadow-lg fixed top-5 w-[90%] md:w-[1238px] ">
      <div className="w-52 h-12 ">
        <img src="./logos/logo.png" alt="coffee logo" />
      </div>
      <div className="flex">
        <NavItems />
      </div>
      <div className="flex gap-2">
        <div
          className="border flex items-center px-2 rounded-sm  "
          style={{ backgroundColor: 'hsla(60, 88%, 97%, 0.69)' }}
        >
          {' '}
          <SearchIcon className="text-icon text-2xl" />
        </div>
        <div className="border flex items-center px-2 rounded-sm ">
          {' '}
          <Link to="/shop">
            <ShoppingCart className="text-icon text-2xl" />
          </Link>
        </div>
        {status ? (
          <AccountPopover />
        ) : (
          <Link to="/login">
            <Button className="h-[45px] w-[80px] rounded-xl">Login</Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;