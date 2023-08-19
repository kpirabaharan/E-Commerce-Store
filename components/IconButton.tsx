'use client';

import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

interface IconButtonProps {
  onClick: () => void;
  Icon: LucideIcon;
}

const IconButton = ({ onClick, Icon }: IconButtonProps) => {
  return (
    <Button
      size={'rounded-icon'}
      variant={'outline'}
      className='group/item'
      onClick={onClick}
    >
      {
        <Icon
          size={20}
          className='text-black group-hover/item:text-gray-600 transition'
        />
      }
    </Button>
  );
};

export default IconButton;
