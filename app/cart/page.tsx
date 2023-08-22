'use client';

import { useState, useEffect } from 'react';

import useCart from '@/hooks/useCart';

import Container from '@/components/ui/container';

import CartItem from '@/components/CartItem';
import { Separator } from '@/components/ui/separator';

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { items } = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className='bg-white'>
      <Container>
        <div className='px-4 py-8 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-bold text-black'>Shopping Cart</h1>
          <div className='mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12'>
            <div className='lg:col-span-7'>
              {items.length == 0 ? (
                <p className='text-neutral-500'>No Items Added to Cart</p>
              ) : (
                <ul className='flex flex-col gap-y-4'>
                  {items.map((item) => (
                    <>
                      <CartItem key={item.id} data={item} />
                      <Separator />
                    </>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
