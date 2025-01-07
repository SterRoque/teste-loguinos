import { OrderStatusEnum } from './order-status-enum';

export const orderList = [
   {
      id: 909822629,
      name: 'João Silva',
      date: '2025-01-05',
      hour: '08:00',
      status: OrderStatusEnum.REQUESTED,
   },
   {
      id: 393827691,
      name: 'Maria Lima',
      date: '2025-01-05',
      hour: '08:05',
      status: OrderStatusEnum.DELIVERY_IN_TRANSIT,
   },
   {
      id: 664805828,
      name: 'Pedro Costa',
      date: '2025-01-05',
      hour: '08:10',
      status: OrderStatusEnum.COLLECTED_FOR_DELIVERY,
   },
   {
      id: 336386424,
      name: 'Ana Souza',
      date: '2025-01-05',
      hour: '08:15',
      status: OrderStatusEnum.ORDER_DELIVERED,
   },
   {
      id: 783708543,
      name: 'Lucas Melo',
      date: '2025-01-05',
      hour: '08:20',
      status: OrderStatusEnum.COLLECTION_CENTER,
   },
   {
      id: 527645541,
      name: 'Carla Santos',
      date: '2025-01-05',
      hour: '08:25',
      status: OrderStatusEnum.COLLECTED,
   },
   {
      id: 826594053,
      name: 'Eduardo Pereira',
      date: '2025-01-05',
      hour: '08:30',
      status: OrderStatusEnum.REQUESTED,
   },
   {
      id: 235906180,
      name: 'Mariana Almeida',
      date: '2025-01-05',
      hour: '08:35',
      status: OrderStatusEnum.DELIVERY_FAILED,
   },
   {
      id: 976075489,
      name: 'Fernando Rodrigues',
      date: '2025-01-05',
      hour: '08:45',
      status: OrderStatusEnum.DELIVERY_IN_TRANSIT,
   },
   {
      id: 976075434,
      name: 'Gabriela Ferreira',
      date: '2025-01-05',
      hour: '08:45',
      status: OrderStatusEnum.ORDER_DELIVERED,
   },
];
