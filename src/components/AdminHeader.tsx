
import Search from './Search'

function AdminHeader() {
  return (
    <div className='w-full flex items-center justify-between border-b border-primary/30 px-4 md:h-[57px] bg-white  fixed z-10 '>
        <div>
            <Search/>
        </div>
        <div>
           <img src="/icons/notification.svg" alt="Notifications" /> 
        </div>
    </div>
  )
}

export default AdminHeader
