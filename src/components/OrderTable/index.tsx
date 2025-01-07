import { orderList } from '@/src/constants/order-list';
import { Eye } from 'lucide-react';

export function OrderTable() {
   return (
      <div className='overflow-x-auto shadow-md sm:rounded-lg'>
         <table className='min-w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-800 dark:text-gray-200'>
               <tr>
                  <th className='px-6 py-3'>ID</th>
                  <th className='px-6 py-3'>Cliente</th>
                  <th className='px-6 py-3'>Data</th>
                  <th className='px-6 py-3'>Horário</th>
                  <th className='px-6 py-3'>Status</th>
                  <th className='px-6 py-3'>Detalhe</th>
               </tr>
            </thead>
            <tbody>
               {orderList.map((item) => (
                  <tr
                     key={item.id}
                     className='bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'>
                     <td className='px-6 py-4'>{item.id}</td>
                     <td className='px-6 py-4'>{item.name}</td>
                     <td className='px-6 py-4'>{item.date}</td>
                     <td className='px-6 py-4'>{item.hour}</td>
                     <td className='px-6 py-4'>{item.status}</td>
                     <td className='px-6 py-4'>
                        <div className='bg-blue-600 h-7 w-7 text-white flex items-center justify-center rounded-lg cursor-pointer transition-transform transform hover:scale-110'>
                           <Eye size={18} />
                        </div>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
}
