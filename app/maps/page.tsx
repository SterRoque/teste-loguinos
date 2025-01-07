import { Header } from '@/src/components/Header';
import { Map } from '@/src/components/Map';
import { OrderTable } from '@/src/components/OrderTable';
import { Sidebar } from '@/src/components/Sidebar';

export default function Maps() {
   return (
      <div className='bg-gray-100 h-screen flex'>
         <Sidebar />
         <div className='w-full'>
            <Header />
            <main className='px-4 flex flex-col gap-4'>
               <div className='w-full rounded-xl border border-gray-300'>
                  <Map />
               </div>
               <div className='flex gap-4 z-50 shadow-xl'>
                  <OrderTable />
                  <OrderTable />
               </div>
            </main>
         </div>
      </div>
   );
}
