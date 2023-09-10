import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface ThemeStore {
  userTheme: string;
  toggleTheme: () => void;
}

const useUserTheme = create(
  persist<ThemeStore>(
    (set, get) => ({
      userTheme: 'light',
      toggleTheme: () => {
        const currentTheme = get().userTheme;

        currentTheme === 'light'
          ? set({ userTheme: 'dark' })
          : set({ userTheme: 'light' });
      },
    }),
    { name: 'theme-storage', storage: createJSONStorage(() => localStorage) },
  ),
);

export default useUserTheme;
