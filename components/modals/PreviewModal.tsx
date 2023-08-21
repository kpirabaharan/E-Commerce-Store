'use client';

import usePreviewModal from '@/hooks/usePreviewModal';

import { Modal } from '@/components/ui/modal';

import Gallery from '@/components/Gallery';
import Info from '@/components/Info';

const PreviewModal = () => {
  const { product, isOpen, onClose } = usePreviewModal();

  if (!product) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div
        className='grid grid-cols-1 items-start gap-x-6 gap-y-8 
        md:grid-cols-12 lg:gap-x-8 '
      >
        <div className='md:col-span-6'>
          <Gallery images={product.images} />
        </div>
        <div className='md:col-span-6 h-full'>
          <Info data={product} />
        </div>
      </div>
    </Modal>
  );
};

export default PreviewModal;
