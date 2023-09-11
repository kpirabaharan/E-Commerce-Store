import { OrderItem as OrderItemType } from '@/types';

import OrderItem from '@/components/OrderItem';
import { Separator } from '@/components/ui/separator';

interface OrderListProps {
  items: OrderItemType[];
  orderDate: Date;
}

const OrderList = ({ items, orderDate }: OrderListProps) => {
  return (
    <div className='flex flex-col gap-y-8'>
      {items.map((item) => (
        <div key={item.id} className='flex flex-col gap-y-8'>
          <OrderItem
            data={item}
            orderDate={orderDate}
          />
          <Separator />
        </div>
      ))}
    </div>
  );
};

export default OrderList;
