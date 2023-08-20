'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ExpandIcon, ShoppingCartIcon } from 'lucide-react';

import { Product } from '@/types';

import IconButton from '@/components/IconButton';
import Currency from '@/components/Currency';

interface ProductCardProps {
  data: Product;
}

const ProductCard = ({ data }: ProductCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className='bg-white group cursor-pointer rounded-xl border p-3 space-y-3'
    >
      {/* Images and Actions */}
      <div
        className={`aspect-square relative rounded-xl ${true && 'bg-gray-100'}`}
      >
        <Image
          className='aspect-ratio rounded-xl'
          src={data.images[0].url}
          alt='product'
          fill
        />
        <div
          className='opacity-0 group-hover:opacity-100 transition duration-300
          absolute bottom-2 w-full'
        >
          <div className='flex gap-x-2 justify-center'>
            <IconButton onClick={() => {}} Icon={ExpandIcon} />
            <IconButton onClick={() => {}} Icon={ShoppingCartIcon} />
          </div>
        </div>
      </div>
      {/* Description and Price */}
      <div className='flex justify-between w-full'>
        <div>
          <p className='font-semibold text-lg'>{data.name}</p>
          <p className='text-sm text-gray-500'>{data.category.name}</p>
        </div>
        <Currency value={data.price} />
      </div>
    </div>
  );
};

export default ProductCard;
