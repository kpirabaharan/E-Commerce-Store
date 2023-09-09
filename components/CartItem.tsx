'use client';

import Image from 'next/image';
import { Trash2Icon, PlusIcon, MinusIcon } from 'lucide-react';

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
  const { removeItem, removeBatch, addItem, items } = useCart();
  const isSmallScreens = useMediaQuery('(max-width: 639px)');

  const currentItem = items.find((item) => item.id === data.id);

  return (
    <li className='flex flex-row gap-x-6'>
      <div
        className={`relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48 
        bg-muted dark:bg-primary-foreground`}
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
        <p className='sm:text-lg font-semibold'>{data.name}</p>
        <div className='flex flex-row gap-x-2 sm:gap-x-4 text-sm text-muted-foreground'>
          <p>{data.color.name}</p>
          <Separator orientation={'vertical'} />
          <p>{data.size.name}</p>
        </div>
        <Currency
          className='text-base sm:text-lg'
          value={parseFloat(data.price) * currentItem!.quantity}
        />
      </div>

      <div className='flex flex-row h-full items-center gap-x-4'>
        <div className='flex flex-row items-center gap-x-1 bg-white rounded-xl'>
          <Button
            size={isSmallScreens ? 'icon-sm' : 'icon'}
            onClick={() => removeItem(data.id)}
          >
            <MinusIcon size={20} />
          </Button>
          <p className='flex justify-center text-secondary text-lg font-bold w-[25px]'>
            {data.quantity}
          </p>
          <Button
            size={isSmallScreens ? 'icon-sm' : 'icon'}
            onClick={() => addItem(data, false)}
            disabled={currentItem!.quantity >= 5}
          >
            <PlusIcon size={20} />
          </Button>
        </div>
        <Button
          onClick={() => removeBatch(data.id)}
          size={isSmallScreens ? 'icon-sm' : 'icon'}
          variant={'destructive'}
        >
          <Trash2Icon size={isSmallScreens ? 15 : 20} />
        </Button>
      </div>
    </li>
  );
};

export default CartItem;
