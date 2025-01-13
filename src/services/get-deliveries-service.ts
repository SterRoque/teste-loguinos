import { IDelivery } from '../interfaces/delivery-interface';
import { api } from '../lib/axios';

export async function getDeliveriesService(): Promise<IDelivery[]> {
   const response = await api.get('/deliveries');
   return response.data;
}
