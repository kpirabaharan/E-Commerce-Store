import { CreditCardIcon } from 'lucide-react';

import { Order } from '@/types';

import Currency from '@/components/Currency';

import { Separator } from '@/components/ui/separator';

interface PaymentSummaryProps {
  order: Order;
  address: string[];
  subtotal: number;
}

const PaymentSummary = ({ order, address, subtotal }: PaymentSummaryProps) => {
  return (
    <div
      className='flex flex-col gap-y-4 p-4 sm:p-6 mt-4 rounded-lg bg-secondary
      col-span-3 lg:col-span-2'
    >
      <h1 className='text-2xl font-bold'>Payment Summary</h1>

      <Separator className='bg-gray-300' />

      <div className='grid grid-cols-2 w-fit gap-x-8 mt-2'>
        <div className='flex flex-col gap-y-2'>
          <p className='font-semibold'>Pay in full with:</p>
          <div className='flex flex-row gap-x-2'>
            <CreditCardIcon />
            <p className='font-light'>********42</p>
          </div>
        </div>

        <div className='flex flex-col gap-y-1'>
          <p className='font-semibold'>Bills to:</p>
          <p className='font-light'>{order.name}</p>
          <p className='font-light'>{address[0]}</p>
          <p className='font-light'>
            {address[1]}, {address[2]}, {address[3]}
          </p>
        </div>
      </div>

      <Separator className='bg-gray-300' />

      <div className='flex flex-col gap-y-1 font-light'>
        <div className='flex flex-row justify-between'>
          <p className='text-lg'>Subtotal</p>
          <Currency className='font-light' value={subtotal} />
        </div>
        <div className='flex flex-row justify-between'>
          <p className='text-lg'>Shipping</p>
          <p className='text-lg'>FREE</p>
        </div>
        <div className='flex flex-row justify-between'>
          <p className='text-lg'>Estimated Tax</p>
          <Currency className='font-light' value={0} />
        </div>
      </div>

      <Separator className='bg-gray-300' />

      <div className='flex flex-row justify-between'>
        <p className='text-lg font-bold'>Total</p>
        <Currency className='font-bold' value={subtotal} />
      </div>
    </div>
  );
};

export default PaymentSummary;
