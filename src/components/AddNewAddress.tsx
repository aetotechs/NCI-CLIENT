import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,

  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';


import { AddAddressForm } from './forms/AddAddressForm';

export function AddAdressDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-[166px] h-[42px] my-4 rounded-[10px] text-sm font-medium">
          Add New Address
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-md w-[90%]">
        <DialogHeader>
          <DialogTitle className='font-medium text-base'>Add New Address</DialogTitle>
        </DialogHeader>

        <AddAddressForm />
      </DialogContent>
    </Dialog>
  );
}
