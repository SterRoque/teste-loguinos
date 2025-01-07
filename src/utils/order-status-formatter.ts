import { OrderStatusEnum } from "../constants/order-status-enum";

export function orderStatusFormatter(status: OrderStatusEnum) {

    const statusList = {
        [OrderStatusEnum.COLLECTED]: {
            background: 'bg-yellow-200',
            color: 'text-yellow-800',
            text: 'Coletado'
        },
        [OrderStatusEnum.COLLECTED_FOR_DELIVERY]: {
            background: 'bg-purple-200',
            color: 'text-purple-800',
            text: 'Coletado para entrega'
        },
        [OrderStatusEnum.COLLECTION_CENTER]: {
            background: 'bg-orange-200',
            color: 'text-orange-800',
            text: 'Centro de coleta'
        },
        [OrderStatusEnum.DELIVERY_FAILED]: {
            background: 'bg-red-200',
            color: 'text-red-800',
            text: 'Falha na entrega'
        },
        [OrderStatusEnum.DELIVERY_IN_TRANSIT]: {
            background: 'bg-indigo-200',
            color: 'text-indigo-800',
            text: 'Entrega a caminho'
        },
        [OrderStatusEnum.ORDER_DELIVERED]: {
            background: 'bg-green-200',
            color: 'text-green-800',
            text: 'Pedido entregue'
        },
        [OrderStatusEnum.REQUESTED]: {
            background: 'bg-blue-200',
            color: 'text-blue-800',
            text: 'Solicitado'
        }
    }

    return statusList[status];
}