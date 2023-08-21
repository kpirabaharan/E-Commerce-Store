import { ShoppingCartIcon } from 'lucide-react';

import { Product } from '@/types';

import Currency from '@/components/Currency';

import { Separator } from '@/components/ui/separator';
import { Button } from '@/components//ui/button';

interface InfoProps {
  data: Product;
}

const Info = ({ data }: InfoProps) => {
  return (
    <div className='flex flex-col gap-2 justify-between h-full'>
      <div className='flex flex-col gap-y-2'>
        <h1 className='text-3xl font-bold text-gray-900'>{data.name}</h1>
        <Currency className='text-2xl text-gray-900' value={data.price} />
        <Separator />
        <div className='flex items-center gap-x-4'>
          <h3 className='font-semibold text-black'>Size:</h3>
          <p>{data.size.value}</p>
        </div>
        <div className='flex items-center gap-x-4'>
          <h3 className='font-semibold text-black'>Color:</h3>
          <div
            className='h-6 w-6 rounded-full border border-gray-600'
            style={{ backgroundColor: data.color.value }}
          />
        </div>
      </div>
      <Button className='mt-4 gap-x-2'>
        <p>Add to Cart</p>
      </Button>
    </div>
  );
};

export default Info;
