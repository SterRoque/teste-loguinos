import { User } from 'lucide-react';
import { Input } from '../Input';

export function Header() {
   return (
      <header className='h-14 bg-slate-900 w-full flex items-center justify-between px-4 dark:bg-componentDark'>
         <Input
            className='w-56 h-8'
            placeholder='Pesquisar'
         />
         <button className='h-full w-11 flex justify-center items-center'>
            <User
               className='text-white'
               size={24}
            />
         </button>
      </header>
   );
}
