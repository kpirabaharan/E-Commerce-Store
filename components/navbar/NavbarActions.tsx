'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ShoppingBagIcon } from 'lucide-react';

import useCart from '@/hooks/useCart';

import { Button } from '@/components/ui/button';

const NavbarActions = () => {
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
    <div className='ml-auto flex items-center gap-x-4'>
      <Button
        size={'sm'}
        className='rounded-2xl'
        onClick={() => router.push('/cart')}
      >
        <ShoppingBagIcon size={20} color='white' />
        <p className='ml-2 text-sm pt-[1px]'>{items.length}</p>
      </Button>
    </div>
  );
};

export default NavbarActions;
