'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ScaleLoader } from 'react-spinners';

import useCart from '@/hooks/useCart';
import { useOrigin } from '@/hooks/useOrigin';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import Currency from '@/components/Currency';

const Summary = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { items, removeAll } = useCart();
  const origin = useOrigin();

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

  const onCheckout = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
        {
          orderedProducts: items.map((item) => ({
            productId: item.id,
            quantity: item.quantity,
          })),
          storeUrl: origin,
        },
      );

      window.location = response.data.url;
    } catch (err) {
      console.log(err);
      toast.error('Checkout Failed');
    } finally {
      setIsLoading(false);
    }
  };

  const totalPrice = items.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0,
  );

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div
      className='mt-4 lg:mt-0 lg:col-span-5 px-4 py-6 sm:p-6 lg:p-8
      rounded-lg bg-secondary flex flex-col gap-y-4'
    >
      <h2 className='text-lg font-bold'>Order Summary</h2>
      <Separator />
      <div className='flex flex-row items-center justify-between'>
        <div className='flex flex-col'>
          <p className='text-base font-medium'>Order Total</p>
          <p className='text-sm text-muted-foreground'>{totalItems} Items</p>
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
