import { api } from '../lib/axios';

export async function getOrdersService() {
   return await api.get('/orders');
}
