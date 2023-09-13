import Image from 'next/image';
import { format } from 'date-fns';

import { OrderItem } from '@/types';

import { Progress } from '@/components/ui/progress';
import Currency from '@/components/Currency';

interface OrderItemProps {
  data: OrderItem;
  orderDate: Date;
}

const deliveryProgress = [
  {
    text: 'Estimated Delivery Date:',
    value: 0,
    progress: 5,
  },
  {
    text: 'Estimated Delivery Date:',
    value: 0.1,
    progress: 38,
  },
  {
    text: 'Estimated Delivery Date:',
    value: 0.4,
    progress: 69,
  },
  {
    text: 'Delivered:',
    value: 1,
    progress: 100,
  },
];

const OrderItem = ({ data, orderDate }: OrderItemProps) => {
  const deliveryDate = new Date(data.deliveryDate);
  const deliveryToOrder = deliveryDate.getTime() - orderDate.getTime();
  const nowToOrder = new Date().getTime() - orderDate.getTime();
  const timePercentage = nowToOrder / deliveryToOrder;

  var deliveryStatus = deliveryProgress[0];

  if (timePercentage >= deliveryProgress[3].value) {
    deliveryStatus = deliveryProgress[3];
  } else if (timePercentage >= deliveryProgress[2].value) {
    deliveryStatus = deliveryProgress[2];
  } else if (timePercentage >= deliveryProgress[1].value) {
    deliveryStatus = deliveryProgress[1];
  }

  const itemTotal = data.quantity * Number(data.product.price);

  return (
    <div className='grid grid-cols-5 gap-x-2 lg:gap-x-8'>
      <div
        className='relative col-span-2 lg:col-span-2 bg-secondary rounded-lg
        h-[150px] md:h-[200px] lg:h-[300px]'
      >
        <Image
          src={data.product.images[0].url}
          alt='Product'
          fill
          className='object-contain object-center'
        />
      </div>

      <div className='col-span-3 lg:col-span-3 flex flex-col gap-y-1 lg:gap-y-2 justify-center'>
        <div className='flex flex-col'>
          <div className='flex flex-row justify-between'>
            <p className='text-base lg:text-lg'>{data.product.name}</p>
            <Currency
              className='font-normal text-base lg:text-lg'
              value={itemTotal}
            />
          </div>
          {data.quantity > 1 && (
            <div className='flex flex-row justify-between'>
              <p className='text-muted-foreground text-xs lg:text-sm'>
                Quantity {data.quantity}
              </p>
              <Currency
                className='text-muted-foreground font-normal text-xs lg:text-sm'
                value={data.product.price}
              >
                each
              </Currency>
            </div>
          )}
        </div>
        <p className='text-xl lg:text-3xl font-semibold text-primary'>
          {deliveryStatus.text}
          <span className='font-semibold text-secondary-foreground'>
            {' '}
            {format(deliveryDate, 'MMMM do, yyyy')}
          </span>
        </p>

        <div className='hidden lg:flex flex-col gap-y-2 col-span-5'>
          <Progress className='h-2' value={deliveryStatus.progress} />
          <div className='w-full flex justify-between text-xs lg:text-sm text-muted-foreground'>
            <p>Order Placed</p>
            <p>Preparing to Ship</p>
            <p>Shipped</p>
            <p>Delivered</p>
          </div>
        </div>
      </div>
      <div className='flex lg:hidden mt-8 flex-col gap-y-2 col-span-5'>
        <Progress className='h-2' value={deliveryStatus.progress} />
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
