'use client';

import { useEffect } from 'react';
import { toast } from 'react-toastify';

import { PropsWithChildren } from 'react';

import useCart from '@/hooks/useCart';

interface OrderCardProps extends PropsWithChildren {}

const OrderCard = ({ children }: OrderCardProps) => {
  const { removeAll } = useCart();

  useEffect(() => {
    removeAll();
    toast.success('Payment Completed', { toastId: 'Payment Complete' });
  }, []);

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
