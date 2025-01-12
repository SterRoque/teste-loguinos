'use client';

import { orderList } from '@/src/constants/order-list';
import { cn } from '@/src/utils/cn';
import { orderStatusFormatter } from '@/src/utils/order-status-formatter';
import { Eye, Package } from 'lucide-react';
import { Input } from '../Input';
import { useMemo, useState } from 'react';
import { sanitizeString } from '@/src/utils/sanitize-string';
import { IOrder } from '@/src/interfaces/order-interface';
import { formatId } from '@/src/utils/format-id';
import { splitDateAndFormatTime } from '@/src/utils/split-date-and-format-time';

type OrderTableProps = {
   orders: IOrder[];
};

export function OrderTable({ orders }: OrderTableProps) {
   const [inputSearchText, setInputSearchText] = useState<string>('');

   const orderListFiltered = useMemo(() => {
      return orders.filter((item) => {
         const sanitizedOrderName = sanitizeString(item.client.first_name);
         const sanitizedInputSearchText = sanitizeString(inputSearchText);

         return sanitizedOrderName.includes(sanitizedInputSearchText);
      });
   }, [inputSearchText]);

   return (
      <div className='bg-white flex-1 shadow-xl rounded-xl z-50 px-4 border border-gray-300 dark:bg-componentDark dark:border-slate-800 dark:text-white'>
         <div className='py-8 flex justify-between'>
            <div className='flex gap-2 w-40 '>
               <div className='text-white bg-blue-600 h-8 w-8 flex justify-center items-center rounded-lg'>
                  <Package size={20} />
               </div>
               <h1>Pedidos</h1>
            </div>
            <Input
               value={inputSearchText}
               onChange={(e) => setInputSearchText(e.target.value)}
               placeholder='Pesquisar'
               className='bg-gray-200 dark:text-black'
            />
         </div>

         <table className='w-full '>
            <thead className=''>
               <tr className='border-b-2 dark:border-slate-800'>
                  <th className='text-left py-3'>ID</th>
                  <th className='text-left py-3'>Cliente</th>
                  <th className='text-left py-3'>Data</th>
                  <th className='text-left py-3'>Horário</th>
                  <th className='text-center py-3'>Status</th>
                  <th className='text-center py-3'>Detalhe</th>
               </tr>
            </thead>
            <tbody>
               {orderListFiltered.map((order) => {
                  const statusFormated = orderStatusFormatter(
                     order.order_status[0].status,
                  );

                  const { date, time } = splitDateAndFormatTime(
                     order.order_status[0].created_at,
                  );

                  return (
                     <tr
                        key={order.id}
                        className='border-b-2  hover:bg-gray-200 dark:hover:bg-backgroundDark dark:border-slate-800'>
                        <td className='py-2 text-left'>{formatId(order.id)}</td>
                        <td className='py-2 text-left'>
                           {order.client.first_name} {order.client.last_name}
                        </td>
                        <td className='py-2 text-left'>{date}</td>
                        <td className='py-2 text-left'>{time}</td>
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
