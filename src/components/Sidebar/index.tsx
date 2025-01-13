'use client';
import { sidebarLinks } from '@/src/constants/sidebar-links';
import { cn } from '@/src/utils/cn';
import { ChevronLeft, ChevronRight, PackageOpen } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { ThemeButton } from '../ThemeButton';
import { usePathname } from 'next/navigation';

export function Sidebar() {
   const [openSidebar, setOpenSidebar] = useState<boolean>();
   const pathname = usePathname();

   function handleToggleSidebar() {
      setOpenSidebar((prev) => !prev);
   }

   return (
      <div
         className={cn(
            'min-h-screen bg-slate-900 transition-all duration-300 shadow-black shadow-md z- dark:bg-componentDark',
            openSidebar ? 'w-60' : 'w-20',
         )}>
         <div
            onClick={handleToggleSidebar}
            className={cn(
               'flex w-full relative pt-2 cursor-pointer',
               !openSidebar && 'justify-center',
            )}>
            <div
               className={cn(
                  'flex gap-4 justify-center items-center ml-2',
                  !openSidebar && 'ml-0',
               )}>
               <div className='bg-blue-900 flex justify-center items-center h-10 w-10 rounded-lg'>
                  <PackageOpen
                     className='text-white'
                     size={24}
                  />
               </div>
               <h1
                  className={cn(
                     'text-white font-bold text-xl',
                     !openSidebar && 'hidden',
                  )}>
                  Loguinos
               </h1>
            </div>
            <div className='absolute -right-3'>
               {openSidebar ? (
                  <ChevronLeft className='text-white' />
               ) : (
                  <ChevronRight className='text-white' />
               )}
            </div>
         </div>

         <div
            className={cn('flex flex-col px-2 mt-20 ', !openSidebar && 'px-4')}>
            {sidebarLinks.map((item) => (
               <Link
                  href={item.href}
                  key={item.name}
                  className={cn(
                     'flex w-full gap-4 text-white hover:bg-blue-600 h-9 rounded-md items-center transition-all duration-300',
                     !openSidebar ? 'justify-center p-0' : 'pl-2',
                     pathname === item.href && 'bg-blue-600',
                  )}>
                  <item.icon size={20} />
                  <span
                     className={cn(
                        'text-sm transition-all duration-300',
                        !openSidebar && 'hidden',
                     )}>
                     {item.name}
                  </span>
               </Link>
            ))}
         </div>
         <div
            className={cn(
               'flex items-center px-2 w-full mt-20',
               !openSidebar && 'justify-center',
            )}>
            <ThemeButton />
         </div>
      </div>
   );
}
