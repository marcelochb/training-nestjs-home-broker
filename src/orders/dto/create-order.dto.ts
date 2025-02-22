import { OrderType } from '../entities/order.entity';

export class CreateOrderDto {
    shares: number;
    partial: number;
    price: number;
    type: OrderType;
    walletId: string;
    assetId: string;
}
