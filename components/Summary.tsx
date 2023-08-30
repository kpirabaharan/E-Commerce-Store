'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ScaleLoader } from 'react-spinners';

import useCart from '@/hooks/useCart';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import Currency from '@/components/Currency';

const Summary = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { items, removeAll } = useCart();

  useEffect(() => {
    if (searchParams.get('success')) {
      toast.success('Payment Completed');
      removeAll();
      router.push('/cart');
    }

    if (searchParams.get('canceled')) {
      toast('Payment Canceled');
      router.push('/cart');
    }
  }, [searchParams, removeAll, router]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const onCheckout = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
        { productIds: items.map((item) => item.id) },
      );

      window.location = response.data.url;
    } catch (err) {
      console.log(err);
      toast.error('Checkout Failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className='mt-4 lg:mt-0 lg:col-span-5 px-4 py-6 sm:p-6 lg:p-8
      rounded-lg bg-gray-50 flex flex-col gap-y-4'
    >
      <h2 className='text-lg font-bold text-gray-900'>Order Summary</h2>
      <Separator />
      <div className='flex flex-row items-center justify-between'>
        <div className='flex flex-col'>
          <p className='text-base font-medium text-gray-900'>Order Total</p>
          <p className='text-sm text-gray-500'>{items.length} Items</p>
        </div>
        <Currency value={totalPrice} />
      </div>
      <Button
        className='w-full mt-2 lg:mt-4'
        onClick={onCheckout}
        disabled={isLoading}
        type='submit'
      >
        {isLoading ? (
          <ScaleLoader color='white' height={15} />
        ) : (
          <p>Checkout</p>
        )}
      </Button>
    </div>
  );
};

export default Summary;
