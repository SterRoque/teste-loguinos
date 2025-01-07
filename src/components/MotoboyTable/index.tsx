import { orderList } from '@/src/constants/order-list';
import { cn } from '@/src/utils/cn';
import { orderStatusFormatter } from '@/src/utils/order-status-formatter';
import { Eye, Map, MapPin, Package } from 'lucide-react';
import { Input } from '../Input';
import { motoboyList } from '@/src/constants/motoboy-list';

export function MotoboyTable() {
   return (
      <div className='overflow-x-auto flex-1 shadow-xl rounded-xl z-50 px-4 border border-gray-300'>
         <div className='py-8 flex justify-between'>
            <div className='flex gap-2 w-40 '>
               <div className='text-white bg-blue-600 h-8 w-8 flex justify-center items-center rounded-lg'>
                  <Package size={20} />
               </div>
               <h1>Pedidos</h1>
            </div>
            <Input
               placeholder='Pesquisar'
               className='bg-gray-200'
            />
         </div>

         <table className='w-full '>
            <thead className=''>
               <tr className='border-b-2'>
                  <th className='text-left py-3'>#</th>
                  <th className='text-left py-3'>Nome</th>
                  <th className='text-center py-3'>Corridas</th>
                  <th className='text-center py-3'>Avaliações</th>
                  <th className='text-center py-3'>Detalhe</th>
               </tr>
            </thead>
            <tbody>
               {motoboyList.map((item) => {
                  return (
                     <tr
                        key={item.id}
                        className='border-b-2  hover:bg-gray-200'>
                        <td className='py-2 text-left'>{item.id}</td>
                        <td className='py-2 text-left'>{item.name}</td>
                        <td className='py-2 text-left'>
                           <div className='bg-gray-300 rounded-full px-2 py-1 text-center'>
                              {item.races}
                           </div>
                        </td>
                        <td className='py-2 text-center'>{item.reviews}</td>

                        <td className='px-6 py-3 text-center flex justify-center items-center gap-2'>
                           <div className='bg-blue-600 h-7 w-7 text-white flex self-center items-center justify-center rounded-lg cursor-pointer transition-transform transform hover:scale-110'>
                              <Eye size={18} />
                           </div>
                           <div className='bg-green-600 h-7 w-7 text-white flex self-center items-center justify-center rounded-lg cursor-pointer transition-transform transform hover:scale-110'>
                              <MapPin size={18} />
                           </div>
                        </td>
                     </tr>
                  );
               })}
            </tbody>
         </table>
      </div>
   );
}
