import { OrderItems } from '@/types';

interface OrderListProps {
  items: OrderItems[];
}

const OrderList = ({ items }: OrderListProps) => {
  return <div className='flex flex-col gap-y-4'>OrderList</div>;
};

export default OrderList;
