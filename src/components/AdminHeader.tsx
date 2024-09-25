
import Search from './Search'

function AdminHeader() {
  return (
    <div className=' flex items-center justify-between border-b border-primary/30 px-5 md:h-[57px] sticky top-0  bg-white   z-10 '>
        <div>
            <Search/>
        </div>
        <div className='flex items-center gap-7'>
           <img src="/icons/notification.svg" alt="Notifications" width={24}/> 
           <div className='h-9 w-9'>
           <img src="/icons/avatar.png" alt="Avatars" />

           </div>
        </div>
    </div>
  )
}

export default AdminHeader
