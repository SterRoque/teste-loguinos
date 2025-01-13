import { IOrder } from '../interfaces/order-interface';
import { api } from '../lib/axios';

export async function getOrdersService(): Promise<IOrder[]> {
   const response = await api.get('/orders');
   return response.data;
}
