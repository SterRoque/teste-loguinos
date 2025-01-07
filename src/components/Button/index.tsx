import { cn } from '@/src/utils/cn';
import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
   isLoading?: boolean;
};

export function Button({
   isLoading = false,
   disabled = false,
   className,
   children,
   ...rest
}: ButtonProps) {
   return (
      <button
         className={cn(
            'w-full bg-blue-600 text-white rounded-lg h-9 mt-7 text-sm flex items-center justify-center',
            className,
         )}
         disabled={disabled || isLoading}
         {...rest}>
         {isLoading ? (
            <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin' />
         ) : (
            children
         )}
      </button>
   );
}
