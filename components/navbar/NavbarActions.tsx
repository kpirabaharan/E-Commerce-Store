'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ShoppingBagIcon } from 'lucide-react';

import useCart from '@/hooks/useCart';

import ThemeButton from '@/components/ThemeButton';

import { Button } from '@/components/ui/button';

interface NavbarActionsProps {
  theme: string;
}

const NavbarActions = ({ theme }: NavbarActionsProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const { items } = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className='ml-auto flex items-center gap-x-4'>
      <ThemeButton themeColor={theme} />
      <Button
        size={'sm'}
        className='rounded-2xl'
        onClick={() => router.push('/cart')}
      >
        <ShoppingBagIcon size={20} />
        <p className='ml-2 text-sm pt-[1px]'>{totalItems}</p>
      </Button>
    </div>
  );
};

export default NavbarActions;
