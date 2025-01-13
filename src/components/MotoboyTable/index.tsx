'use client';
import { Bike, Eye, MapPin } from 'lucide-react';
import { Input } from '../Input';
import { useEffect, useMemo, useState } from 'react';
import { sanitizeString } from '@/src/utils/sanitize-string';
import { getDeliveriesService } from '@/src/services/get-deliveries-service';
import { IDelivery } from '@/src/interfaces/delivery-interface';
import { formatId } from '@/src/utils/format-id';

type MotoboyTableProps = {
   deliveries: IDelivery[];
};

export function MotoboyTable({ deliveries = [] }: MotoboyTableProps) {
   const [inputSearchText, setInputSearchText] = useState<string>('');

   const motoboyListFiltered = useMemo(() => {
      return deliveries.filter((item) => {
         const sanitizedMotoboyName = sanitizeString(item.first_name);
         const sanitizedInputSearchText = sanitizeString(inputSearchText);

         return sanitizedMotoboyName.includes(sanitizedInputSearchText);
      });
   }, [inputSearchText]);
   return (
      <div className='bg-white flex-1 shadow-xl rounded-xl z-50 px-4 border border-gray-300 dark:bg-componentDark dark:text-white dark:border-slate-800'>
         <div className='py-8 flex justify-between'>
            <div className='flex gap-2 w-40 '>
               <div className='text-white bg-blue-600 h-8 w-8 flex justify-center items-center rounded-lg'>
                  <Bike size={20} />
               </div>
               <h1>Motoboy</h1>
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
                  <th className='text-left py-3'>#</th>
                  <th className='text-left py-3'>Nome</th>
                  <th className='text-center py-3'>Corridas</th>
                  <th className='text-center py-3'>Avaliações</th>
                  <th className='text-center py-3'>Detalhe</th>
               </tr>
            </thead>
            <tbody>
               {motoboyListFiltered.map((item) => {
                  return (
                     <tr
                        key={item.id}
                        className='border-b-2  hover:bg-gray-200 dark:hover:bg-backgroundDark  dark:border-slate-800'>
                        <td className='py-2 text-left'>{formatId(item.id)}</td>
                        <td className='py-2 text-left'>
                           {item.first_name} {item.last_name}
                        </td>
                        <td className='py-2 text-left'>
                           <div className='bg-gray-300 rounded-full px-2 py-1 text-center dark:text-black'>
                              {item.delivered_orders} / {item.total_orders}
                           </div>
                        </td>
                        <td className='py-2 text-center'>
                           {item.avarage_stars}
                        </td>

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
