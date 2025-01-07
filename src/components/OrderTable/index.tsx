import { orderList } from '@/src/constants/order-list';
import { cn } from '@/src/utils/cn';
import { orderStatusFormatter } from '@/src/utils/order-status-formatter';
import { Eye, Package } from 'lucide-react';
import { Input } from '../Input';

export function OrderTable() {
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
                  <th className='text-left py-3'>ID</th>
                  <th className='text-left py-3'>Cliente</th>
                  <th className='text-left py-3'>Data</th>
                  <th className='text-left py-3'>Horário</th>
                  <th className='text-center py-3'>Status</th>
                  <th className='text-center py-3'>Detalhe</th>
               </tr>
            </thead>
            <tbody>
               {orderList.map((item) => {
                  const statusFormated = orderStatusFormatter(item.status);

                  return (
                     <tr
                        key={item.id}
                        className='border-b-2  hover:bg-gray-200'>
                        <td className='py-2 text-left'>{item.id}</td>
                        <td className='py-2 text-left'>{item.name}</td>
                        <td className='py-2 text-left'>{item.date}</td>
                        <td className='py-2 text-left'>{item.hour}</td>
                        <td className='py-2 text-center'>
                           <div
                              className={cn(
                                 'px-4 py-1  text-center rounded-full',
                                 statusFormated.color,
                                 statusFormated.background,
                              )}>
                              {statusFormated.text}
                           </div>
                        </td>
                        <td className='px-6 py-3 text-center flex justify-center items-center'>
                           <div className='bg-blue-600 h-7 w-7 text-white flex self-center items-center justify-center rounded-lg cursor-pointer transition-transform transform hover:scale-110'>
                              <Eye size={18} />
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
