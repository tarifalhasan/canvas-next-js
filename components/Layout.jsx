'use client';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';

import { useState } from 'react';
import { FiHelpCircle } from 'react-icons/fi';
import { LuSearch } from 'react-icons/lu';

import { Logo } from './ui';
import NotifationList from './Header/NotifationList';
import UserProfile from './Header/ProfileMenu';
import MainSidebar from './Sidebar/MainSidebar';
import MobileSidebar from './Header/MobileSidebar';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <main>
      <header className=" fixed top-0 left-0 right-0 border-b border-[#E7E7E4] bg-white px-5 h-[3.9rem]  flex items-center justify-between">
        <div className="logo">
          <Logo />
        </div>
        <div className="  md:flex hidden w-full max-w-[20em] lg:max-w-[36em]  h-9  px-2  py-2.5  bg-soft-gray rounded  border gap-2 items-center ">
          <LuSearch size={20} className=" text-neutral-400" />
          <input
            type="text"
            className=" focus:outline-none placeholder:text-neutral-600 bg-transparent bottom-0 focus:bottom-0"
            placeholder="Search anythings..."
          />
        </div>
        <ul className=" flex items-center gap-3">
          <li className=" text-muted flex items-center gap-1">
            <FiHelpCircle />
            <p className="  text-sm">Need help</p>
          </li>
          <li className=" text-muted flex items-center gap-1">
            <NotifationList />
          </li>
          <li>
            <UserProfile />
          </li>
          <button onClick={toggleDrawer} className=" xl:hidden">
            <HiOutlineMenuAlt1 size={22} />
          </button>
        </ul>
      </header>

      {/* main layout  */}
      <div className=" flex xl:gap-10">
        <MainSidebar />
        <MobileSidebar isOpen={isOpen} toggleDrawer={toggleDrawer} />

        <div className=" w-full mt-[5rem]">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
