import { PropsWithChildren } from 'react';

interface OrderCardProps extends PropsWithChildren {}

const OrderCard = ({ children }: OrderCardProps) => {
  return (
    <div
      className='p-4 sm:p-6 mt-4 rounded-lg bg-secondary col-span-3 
      lg:col-span-1'
    >
      {children}
    </div>
  );
};

export default OrderCard;
