'use client';

import Image from 'next/image';
import { toast } from 'react-toastify';
import { Trash2Icon } from 'lucide-react';

import { Product } from '@/types';
import useCart from '@/hooks/useCart';
import useMediaQuery from '@/hooks/useMediaQuery';

import { Button } from '@/components/ui/button';

import Currency from '@/components/Currency';
import { Separator } from '@/components/ui/separator';

interface CartItemProps {
  data: Product;
}

const CartItem = ({ data }: CartItemProps) => {
  const { removeItem } = useCart();
  const isSmallScreens = useMediaQuery('(max-width: 639px)');

  return (
    <li className='flex flex-row gap-x-6'>
      <div
        className={`relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48 bg-gray-200`}
      >
        <Image
          src={data.images[0].url}
          fill
          alt='Product'
          className={`object-contain object-center`}
        />
      </div>

      <div
        className='flex flex-1 flex-col justify-between sm:justify-normal gap-y-0 
        sm:gap-y-1'
      >
        <p className='text-lg font-semibold text-black'>{data.name}</p>
        <div className='flex flex-row gap-x-2 sm:gap-x-4 text-sm text-gray-500'>
          <p>{data.color.name}</p>
          <Separator orientation={'vertical'} />
          <p>{data.size.name}</p>
        </div>
        <Currency value={data.price} />
      </div>

      <Button
        onClick={() => removeItem(data.id)}
        size={isSmallScreens ? 'icon-sm' : 'icon'}
        variant={'destructive'}
      >
        <Trash2Icon size={isSmallScreens ? 15 : 20} />
      </Button>
    </li>
  );
};

export default CartItem;
