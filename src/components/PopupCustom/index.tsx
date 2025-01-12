import { Calendar, Clock } from 'lucide-react';
import { statusArr } from './constants';
import { IOrder } from '@/src/interfaces/order-interface';
import { formatId } from '@/src/utils/format-id';
import { orderStatusFormatter } from '@/src/utils/order-status-formatter';
import { splitDateAndFormatTime } from '@/src/utils/split-date-and-format-time';

type PopupCustomProps = {
   order: IOrder;
};

export function PopupCustom({ order }: PopupCustomProps) {
   return (
      <div className='w-72 '>
         <p>
            <span className='font-bold'>Pedido: </span>
            {formatId(order.id)}
         </p>

         <div className='border rounded-xl p-2'>
            <p className='text-xs'>
               <strong>Cliente: </strong>
               {order.client.first_name} {order.client.last_name} <br />
               <strong>Motoboy: </strong>
               {order.delivery?.first_name} {order.delivery?.last_name} <br />
               <strong>Status: </strong>
               {orderStatusFormatter(order.order_status[0].status).text}
            </p>

            <div className='flex flex-col gap-2 border-t p-2 h-44 overflow-y-scroll'>
               {order.order_status.map((item, index) => {
                  const { date, time } = splitDateAndFormatTime(
                     item.created_at,
                  );

                  return (
                     <div
                        className='flex w-full gap-2'
                        key={order.id}>
                        <div className='flex flex-col justify-center items-center gap-2'>
                           {/* <item.icon size={18} /> */}
                           <div className='w-[2px] bg-blue-600 h-[50%]' />
                        </div>
                        <div className='bg-green-300 p-2 w-full rounded-xl'>
                           <strong>
                              {orderStatusFormatter(item.status).text}
                           </strong>

                           <div className='flex gap-2 mt-3'>
                              <div className='flex gap-1 text-xs'>
                                 <Calendar size={13} /> {date}
                              </div>
                              <div className='flex gap-1 text-xs'>
                                 <Clock size={13} /> {time}
                              </div>
                           </div>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
      </div>
   );
}
