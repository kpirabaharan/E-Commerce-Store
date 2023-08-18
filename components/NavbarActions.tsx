'use client';

import { ShoppingBagIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';

const NavbarActions = () => {
  return (
    <div className='ml-auto flex items-center gap-x-4'>
      <Button size={'sm'} className='rounded-2xl'>
        <ShoppingBagIcon size={16} color='white' />
        <p className='ml-2 text-sm pt-[1px]'>0</p>
      </Button>
    </div>
  );
};

export default NavbarActions;
