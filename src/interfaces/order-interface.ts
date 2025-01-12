import { OrderStatusEnum } from '../constants/order-status-enum';

export interface IOrder {
   id: string;
   client: {
      first_name: string;
      last_name: string;
   };
   delivery?: {
      first_name: string;
      last_name: string;
   };
   latitude: number;
   longitude: number;
   order_status: {
      created_at: string;
      status: OrderStatusEnum;
   }[];
}
