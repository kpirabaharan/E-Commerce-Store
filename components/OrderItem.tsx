import Image from 'next/image';
import { format } from 'date-fns';

import { OrderItem } from '@/types';

import { Progress } from '@/components/ui/progress';

interface OrderItemProps {
  data: OrderItem;
  orderDate: Date;
}

// const deliveryProgress = [
//   {
//     status: 'Order Placed',
//     value: 5,
//   },
//   {
//     status: 'Preparing to Ship',
//     value: 38,
//   },
//   {
//     status: 'Shipped',
//     value: 69,
//   },
//   {
//     status: 'Delivered',
//     value: 100,
//   },
// ];

const OrderItem = ({ data, orderDate }: OrderItemProps) => {
  const estimatedDeliveryDate = format(
    new Date(orderDate.setDate(orderDate.getDate() + 3 + Math.random() * 3)),
    'MMM do, yyyy',
  );

  return (
    <div className='grid grid-cols-5 gap-x-8'>
      <div
        className='relative col-span-2 lg:col-span-2 bg-secondary rounded-lg
        h-[150px] lg:h-[300px]'
      >
        <Image
          src={data.product.images[0].url}
          alt='Product'
          fill
          className='object-contain object-center'
        />
      </div>

      <div className='col-span-3 lg:col-span-3 flex flex-col gap-y-3 justify-center'>
        <p className='text-muted-foreground leading-3'>{data.product.name}</p>
        <p className='text-xl lg:text-3xl font-semibold text-primary'>
          Estimated Delivery Date:
          <span className='font-semibold text-secondary-foreground'>
            {' '}
            {estimatedDeliveryDate}
          </span>
        </p>

        <div className='hidden lg:flex flex-col gap-y-2 col-span-5'>
          <Progress className='h-2' value={5} />
          <div className='w-full flex justify-between text-xs lg:text-sm text-muted-foreground'>
            <p>Order Placed</p>
            <p>Preparing to Ship</p>
            <p>Shipped</p>
            <p>Delivered</p>
          </div>
        </div>
      </div>
      <div className='flex lg:hidden mt-8 flex-col gap-y-2 col-span-5'>
        <Progress className='h-2' value={5} />
        <div className='w-full flex justify-between text-sm text-muted-foreground'>
          <p>Order Placed</p>
          <p>Preparing to Ship</p>
          <p>Shipped</p>
          <p>Delivered</p>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
