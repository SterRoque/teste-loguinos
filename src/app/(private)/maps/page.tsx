import { Map } from '@/src/components/Map';
import { MotoboyTable } from '@/src/components/MotoboyTable';
import { OrderTable } from '@/src/components/OrderTable';
import { getOrdersService } from '@/src/services/get-orders-service';

export default async function Maps() {
   const { data: orders } = await getOrdersService();

   return (
      <main className='px-4 flex flex-col gap-4'>
         <div className='w-full rounded-xl border border-gray-300'>
            <Map orders={orders} />
         </div>
         <div className='flex gap-4 z-50 shadow-xl'>
            <OrderTable orders={orders} />
            <MotoboyTable />
         </div>
      </main>
   );
}
