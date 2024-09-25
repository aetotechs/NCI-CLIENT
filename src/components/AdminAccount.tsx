import { ChangeDetails } from './forms/ChangeDetailsForm';
import { ChangePasswordForm } from './forms/ChangePasswordForm';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

function AdminAccount() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-10">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-[92px] w-[92px]">
              <img src="/icons/avatar.png" alt="Avatars" />
            </div>
            
              <div>
                <h3 className="font-semibold text-[15px] flex items-center gap-2 mb-1">
                  <span>Nile Admin</span>

                  <span>
                    <Badge variant={'outline'} className='text-red-400 '>Admin</Badge>
                  </span>
                </h3>
                <h5 className="font-normal text-sm">admin@nilecoffeeimports.com</h5>
              </div>
            
          </div>
          <div className="my-6">
            <h3 className="font-semibold text-base">Personal Info</h3>
            <p className="font-normal text-inactive text-[13px]">
              You can change your personal information settings here.
            </p>
          </div>
        </div>
        <div className="bg-white border border-primary/30 rounded-[20px] w-[45vw] p-5">
          <div>
            <h3 className="font-normal text-sm">Change Avatar</h3>
            <div className="flex items-center my-2 gap-5">
              <div className="h-14 w-14">
                <img src="/icons/avatar.png" alt="Avatars" />
              </div>
              <div className="flex gap-3">
                <Button variant={'outline'} className="h-6 border-primary/30 text-primary">
                  Delete
                </Button>
                <Button className="h-6">Upload</Button>
              </div>
            </div>
          </div>
          <ChangeDetails />
        </div>
      </div>

      <div className="flex gap-7 ">
        <div className="my-6 w-[30vw] ">
          <h3 className="font-semibold text-base">Password & Security</h3>
          <p className="font-normal text-inactive text-[13px] ">
            Manage your password and enhance account security settings..
          </p>
        </div>
        <div className="w-[45vw]">
          <ChangePasswordForm />
        </div>
      </div>
    </div>
  );
}

export default AdminAccount;
