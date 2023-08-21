import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { Product } from '@/types';
import { toast } from 'react-toastify';

interface CartStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          return toast('Item Already in Cart');
        }

        set({ items: [...get().items, data] });
        if (!toast.isActive('addItem'))
          toast('Item Added to Cart', { toastId: 'addItem' });
        else toast.update('addItem', { autoClose: 3000 });
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        if (!toast.isActive('removeItem'))
          toast('Item Removed from Cart', { toastId: 'removeItem' });
        else toast.update('removeItem', { autoClose: 3000 });
      },
      removeAll: () => {
        set({ items: [] });
        toast('Removed all Items from Cart', { toastId: 'removeAll' });
      },
    }),
    { name: 'cart-storage', storage: createJSONStorage(() => localStorage) },
  ),
);

export default useCart;
