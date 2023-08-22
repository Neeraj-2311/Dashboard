import { IoIosSearch } from 'react-icons/io';
import { BiBell } from 'react-icons/bi';
import { HiMenuAlt1 } from 'react-icons/hi';

export const Navbar = ({handleToggle}) => {
    return (
        <nav className="border-gray-200 pb-2">
            <div className="flex flex-nowrap items-center justify-between p-4">
                <div className='flex flex-row items-center space-x-3'>
                    <HiMenuAlt1 onClick={() => handleToggle(true)} className='text-2xl lg:hidden flex' />
                    <span className="self-center text-3xl font-bold whitespace-nowrap text-black">Dashboard</span>
                </div>
                <div className='flex items-center space-x-8'>
                    <div className="relative sm:block hidden">
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <IoIosSearch className='text-md text-gray-500' />
                        </div>
                        <input type="text" id="search-navbar" className="block p-1.5 pl-3 pr-8 text-sm text-gray-900 rounded-lg bg-white outline-none" placeholder="Search..." />
                    </div>
                    <BiBell className='text-2xl sm:block hidden' />
                    <img src='https://img.freepik.com/free-icon/user_318-159711.jpg?w=2000' className='block w-8 h-8 rounded-full' alt='user' />
                </div>
            </div>
        </nav>
    )
};