'use client';

import { PropsWithChildren } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
};
