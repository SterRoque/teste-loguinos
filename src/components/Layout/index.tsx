import { ReactNode } from 'react';
import { Header } from '../Header';
import { Sidebar } from '../Sidebar';

type LayoutProps = {
   children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
   return (
      <div className='bg-gray-100 h-full flex dark:bg-backgroundDark'>
         <Sidebar />
         <div className='w-full'>
            <Header />
            {children}
         </div>
      </div>
   );
}
