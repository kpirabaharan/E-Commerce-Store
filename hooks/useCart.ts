import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { toast } from 'react-toastify';

import { Product } from '@/types';

interface CartStore {
  items: (Product & { quantity: number })[];
  addItem: (data: Product, ping?: boolean) => void;
  removeItem: (id: string) => void;
  removeBatch: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product, ping?: boolean) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          set({
            items: get().items.map((item) => {
              const existingItem = item.id === data.id;
              if (existingItem) {
                return { ...item, quantity: item.quantity + 1 };
              } else {
                return { ...item };
              }
            }),
          });
        } else {
          set({ items: [...get().items, { ...data, quantity: 1 }] });
        }
        if (!existingItem || existingItem.quantity < 5) {
          if (!toast.isActive('addItem') && ping)
            toast('Item Added to Cart', { toastId: 'addItem' });
          else if (toast.isActive('addItem') && ping)
            toast.update('addItem', { autoClose: 3000 });
        }
      },
      removeItem: (id: string) => {
        const currentItem = get().items.find((item) => item.id === id);
        if (currentItem!.quantity > 1) {
          set({
            items: get().items.map((item) => {
              const existingItem = item.id === id;
              if (existingItem) {
                return { ...item, quantity: item.quantity - 1 };
              } else {
                return { ...item };
              }
            }),
          });
        } else {
          set({ items: [...get().items.filter((item) => item.id !== id)] });
          if (!toast.isActive('removeItem'))
            toast('Item Removed from Cart', { toastId: 'removeItem' });
          else toast.update('removeItem', { autoClose: 3000 });
        }
      },
      removeBatch: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        if (!toast.isActive('removeItem'))
          toast('Item Removed from Cart', { toastId: 'removeItem' });
        else toast.update('removeItem', { autoClose: 3000 });
      },
      removeAll: () => {
        set({ items: [] });
        // toast('Removed all Items from Cart', { toastId: 'removeAll' });
      },
    }),
    { name: 'cart-storage', storage: createJSONStorage(() => localStorage) },
  ),
);

export default useCart;
