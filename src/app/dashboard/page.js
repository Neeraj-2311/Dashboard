"use client";
import React, { useState } from 'react';
import { BsTags } from 'react-icons/bs';
import { SlCalender, SlSettings } from 'react-icons/sl';
import { TfiPieChart } from 'react-icons/tfi';
import { PiUserCircleLight } from 'react-icons/pi';
import { TfiClose } from 'react-icons/tfi';
import { Navbar } from '../Navbar';
import { Dashboard } from '../Dashboard';

const Main = () => {

   const [isLoading, setIsLoading] = useState(true);
    const [toggle, setToggle] = useState(false);
    const handleToggle = (val) => {
         
        if(document.body.style.overflow === 'hidden'){
            document.body.style.overflow = 'auto';
        } else document.body.style.overflow = 'hidden';
        setToggle(val);
    };
   return (
         <>
            <div className='flex relative flex-row flex-nowrap lg:px-5 px-0 pb-0 lg:pt-5'>
               {isLoading && <div class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
                  <div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
                  <h2 class="text-center text-white text-xl font-semibold">Loading data...</h2>
                  <p class="w-1/3 text-center text-white">This may take a few seconds.</p>
               </div>}
               <div className={`${!toggle && 'hidden'} block lg:hidden h-screen overflow-y-auto bg-gray-500 bg-opacity-60 w-full absolute z-20 top-0 left-0`}>
                   <div id="sidebar-primary" className={`px-5 py-5 -mt-5 lg:mt-0 lg:top-0 top-5 lg:right-0 lg:left-0 z-40 max-w-[fit-content] lg:static absolute lg:bg-transparent bg-white ${toggle ? 'left-0':'right-full'}`} aria-label="Sidebar">
                       <button onClick={() => handleToggle(false)} className={`border p-2 absolute lg:hidden ${toggle ? 'block':'hidden'} top-1 -right-10 bg-white`}>
                           <TfiClose className='text-xl'/>
                       </button>
                       <div className="relative min-h-screen px-4 py-12 overflow-y-auto bg-black rounded-3xl">
                         <a href="#" className="flex items-center mb-10 px-8">
                            <span className="self-center text-4xl font-bold whitespace-nowrap dark:text-white">Board.</span>
                         </a>
                         <ul className="space-y-2">
                            <li>
                               <a href="#" className="flex items-center pl-8 pr-16 py-3 rounded-lg text-white hover:bg-gray-700 group">
                                  <TfiPieChart className='text-xl'/>
                                  <span className="ml-3 text-lg font-semibold">Dashboard</span>
                               </a>
                            </li>
                            <li>
                               <a href="#" className="flex items-center pl-8 pr-16 py-3 rounded-lg text-white hover:bg-gray-700 group">
                                  <BsTags className='text-lg'/>
                                  <span className="flex-1 ml-3 whitespace-nowrap font-thin text-lg">Transactions</span>
                               </a>
                            </li>
                            <li>
                               <a href="#" className="flex items-center pl-8 pr-16 py-3 rounded-lg text-white hover:bg-gray-700 group">
                                  <SlCalender className='text-lg'/>
                                  <span className="flex-1 ml-3 font-thin text-lg">Schedule</span>
                               </a>
                            </li>
                            <li>
                               <a href="#" className="flex items-center pl-8 pr-16 py-3 rounded-lg text-white hover:bg-gray-700 group">
                                  <PiUserCircleLight className='text-xl'/>
                                  <span className="flex-1 ml-3 font-thin text-lg">Users</span>
                               </a>
                            </li>
                            <li>
                               <a href="#" className="flex items-center pl-8 pr-16 py-3 rounded-lg text-white hover:bg-gray-700 group">
                                  <SlSettings className='text-xl'/>
                                  <span className="flex-1 ml-3 font-thin text-lg">Settings</span>
                               </a>
                            </li>
                         </ul>
                         <div className='absolute bottom-12'>
                           <ul className='space-y-3'>
                               <li>
                                   <a href="#" className="flex pl-8 pr-16 rounded-lg text-white group">
                                      <span className="flex-1 font-thin text-sm">Help</span>
                                   </a>
                               </li>
                               <li>
                                   <a href="#" className="flex pl-8 pr-16 rounded-lg text-white group">
                                      <span className="flex-1 font-thin text-sm">Contact Us</span>
                                   </a>
                               </li>
                           </ul>
                         </div>
                      </div>
                   </div>
               </div>
               <div id="sidebar-secondary" className={`px-5 py-5 max-w-[fit-content] bg-transparent lg:block hidden`} aria-label="Sidebar">
                   <div className="relative min-h-screen px-4 py-12 overflow-y-auto bg-black rounded-3xl">
                     <a href="#" className="flex items-center mb-10 px-8">
                        <span className="self-center text-4xl font-bold whitespace-nowrap dark:text-white">Board.</span>
                     </a>
                     <ul className="space-y-2">
                        <li>
                           <a href="#" className="flex items-center pl-8 pr-16 py-3 rounded-lg text-white hover:bg-gray-700 group">
                              <TfiPieChart className='text-xl'/>
                              <span className="ml-3 text-lg font-semibold">Dashboard</span>
                           </a>
                        </li>
                        <li>
                           <a href="#" className="flex items-center pl-8 pr-16 py-3 rounded-lg text-white hover:bg-gray-700 group">
                              <BsTags className='text-lg'/>
                              <span className="flex-1 ml-3 whitespace-nowrap font-thin text-lg">Transactions</span>
                           </a>
                        </li>
                        <li>
                           <a href="#" className="flex items-center pl-8 pr-16 py-3 rounded-lg text-white hover:bg-gray-700 group">
                              <SlCalender className='text-lg'/>
                              <span className="flex-1 ml-3 font-thin text-lg">Schedule</span>
                           </a>
                        </li>
                        <li>
                           <a href="#" className="flex items-center pl-8 pr-16 py-3 rounded-lg text-white hover:bg-gray-700 group">
                              <PiUserCircleLight className='text-xl'/>
                              <span className="flex-1 ml-3 font-thin text-lg">Users</span>
                           </a>
                        </li>
                        <li>
                           <a href="#" className="flex items-center pl-8 pr-16 py-3 rounded-lg text-white hover:bg-gray-700 group">
                              <SlSettings className='text-xl'/>
                              <span className="flex-1 ml-3 font-thin text-lg">Settings</span>
                           </a>
                        </li>
                     </ul>
                     <div className='absolute bottom-12'>
                       <ul className='space-y-3'>
                           <li>
                               <a href="#" className="flex pl-8 pr-16 rounded-lg text-white group">
                                  <span className="flex-1 font-thin text-sm">Help</span>
                               </a>
                           </li>
                           <li>
                               <a href="#" className="flex pl-8 pr-16 rounded-lg text-white group">
                                  <span className="flex-1 font-thin text-sm">Contact Us</span>
                               </a>
                           </li>
                       </ul>
                     </div>
                   </div>
               </div>
               <div className="px-5 lg:pt-6 pb-10 w-full">
                  <Navbar handleToggle={handleToggle}/>
                  <Dashboard setIsLoading={setIsLoading}/>
               </div>
            </div>
       </>
   )
}; 

export default Main;