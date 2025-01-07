import { Calendar, Clock } from 'lucide-react';
import { statusArr } from './constants';

export function PopupCustom() {
   return (
      <div className='w-72 '>
         <p>
            <span className='font-bold'>Pedido: </span>12341234
         </p>

         <div className='border rounded-xl p-2'>
            <p className='text-xs'>
               <strong>Cliente: </strong>Logitech <br />
               <strong>Motoboy: </strong>Amaral <br />
               <strong>Status: </strong>Coletado
            </p>

            <div className='flex flex-col gap-2 border-t p-2 h-44 overflow-y-scroll'>
               {statusArr.map((item) => (
                  <div
                     className='flex w-full gap-2'
                     key={item.status}>
                     <div className='flex flex-col justify-center items-center gap-2'>
                        <item.icon size={18} />
                        <div className='w-[2px] bg-blue-600 h-[50%]' />
                     </div>
                     <div className='bg-green-300 p-2 w-full rounded-xl'>
                        <strong>{item.status}:</strong>

                        <div className='flex gap-2 mt-3'>
                           <div className='flex gap-1 text-xs'>
                              <Calendar size={13} /> {item.date}
                           </div>
                           <div className='flex gap-1 text-xs'>
                              <Clock size={13} /> {item.hour}
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}
