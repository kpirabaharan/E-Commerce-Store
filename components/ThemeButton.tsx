'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from 'lucide-react';

import useUserTheme from '@/hooks/useUserTheme';

import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

interface ThemeButtonProps {
  themeColor: string;
}

const ThemeButton = ({ themeColor }: ThemeButtonProps) => {
  const { theme, setTheme } = useTheme();
  const { userTheme, toggleTheme } = useUserTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    userTheme === 'light'
      ? setTheme(themeColor)
      : setTheme(`${themeColor}-dark`);
  }, [setTheme, themeColor, userTheme, theme]);

  if (!isMounted) {
    return <Skeleton className='h-8 w-8 rounded-full' />;
  }

  return (
    <Button
      variant={'outline'}
      size={'sm'}
      onClick={
        theme === themeColor
          ? () => {
              setTheme(`${themeColor}-dark`);
              toggleTheme();
            }
          : () => {
              setTheme(themeColor);
              toggleTheme();
            }
      }
    >
      {theme === themeColor ? <SunIcon size={16} /> : <MoonIcon size={16} />}
    </Button>
  );
};

export default ThemeButton;
