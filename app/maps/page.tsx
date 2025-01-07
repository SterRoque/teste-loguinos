import { Header } from '@/src/components/Header';
import Map from '@/src/components/Map';
import { Sidebar } from '@/src/components/Sidebar';

export default function Maps() {
   return (
      <div className='bg-gray-100 h-screen flex'>
         <Sidebar />
         <div className='w-full'>
            <Header />
            <main>
               <Map />
            </main>
         </div>
      </div>
   );
}
