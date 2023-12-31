'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import useCart from '@/hooks/useCart';

import { Container } from '@/components/Container';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import CartItem from '@/components/CartItem';
import Summary from '@/components/Summary';

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const { items } = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Container>
      <div className='px-4 py-8 sm:px-6 lg:px-8'>
        <h1 className='text-3xl font-bold'>Shopping Cart</h1>

        <div className='mt-4 sm:mt-8 lg:grid lg:grid-cols-12 lg:items-start gap-x-12'>
          {items.length == 0 ? (
            <div
              className='flex flex-col gap-y-2 lg:col-span-12 items-center justify-center 
                h-full w-full'
            >
              <p className='text-neutral-500'>{'Oops your cart is empty'}</p>
              <p className='text-neutral-500'>
                {"Looks like you haven't added anything to your cart yet"}
              </p>
              <Button className='mt-2' onClick={() => router.push('/')}>
                <p>Return Home</p>
              </Button>
            </div>
          ) : (
            <>
              <div className='lg:col-span-7'>
                <ul className='flex flex-col gap-y-2 sm:gap-y-4'>
                  <Separator />
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className='flex flex-col gap-y-2 sm:gap-y-4'
                    >
                      <CartItem data={item} />
                      <Separator />
                    </div>
                  ))}
                </ul>
              </div>
              <Summary />
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

export default CartPage;
