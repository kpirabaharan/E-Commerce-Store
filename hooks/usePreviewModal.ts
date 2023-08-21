import { create } from 'zustand';

import { Product } from '@/types';

interface PreviewModalStore {
  isOpen: boolean;
  product?: Product;
  onOpen: (data: Product) => void;
  onClose: () => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  product: undefined,
  onOpen: (product: Product) => set({ product, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;
