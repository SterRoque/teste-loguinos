'use client';

import { Fragment, useState } from 'react';
import { cn } from '../../utils/cn';
import { Eye, EyeOff, LockKeyhole, Mail } from 'lucide-react';
import { IconTypes, InputProps } from './types';

export const icons = {
   email: Mail,
   password: LockKeyhole,
};

export function Input({ className, type, ...rest }: InputProps) {
   const Icon = icons[type as IconTypes] ?? Fragment;

   const [isShowingPassword, setIsShowingPassword] = useState<boolean>(false);

   function handleShowingPassword() {
      setIsShowingPassword(false);
   }
   function handleNotShowingPassword() {
      setIsShowingPassword(true);
   }

   return (
      <div className='relative'>
         <input
            type={type === 'password' && isShowingPassword ? 'text' : type}
            className={cn(
               'bg-gray-100 text-sm border border-gray-300 rounded-lg h-9 pl-9 placeholder:text-sm placeholder:text-gray-500 w-full outline-none',
               className,
            )}
            {...rest}
         />

         <Icon
            className='absolute top-0 text-gray-500 left-3 h-full'
            size={17}
         />

         {type === 'password' &&
            (isShowingPassword ? (
               <Eye
                  onClick={handleShowingPassword}
                  className='cursor-pointer absolute text-gray-500 right-2 top-0 h-full'
                  size={18}
               />
            ) : (
               <EyeOff
                  onClick={handleNotShowingPassword}
                  className='cursor-pointer absolute text-gray-500 right-2 top-0 h-full'
                  size={18}
               />
            ))}
      </div>
   );
}
