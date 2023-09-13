import { PropsWithChildren } from 'react';
import { cn, currencyFormatter } from '@/lib/utils';

interface CurrencyProps extends PropsWithChildren {
  value: string | number;
  className?: string;
}

const Currency = ({ value, className, children }: CurrencyProps) => {
  return (
    <p className={cn('font-semibold text-lg', className)}>
      {currencyFormatter.format(Number(value))} {children}
    </p>
  );
};

export default Currency;
