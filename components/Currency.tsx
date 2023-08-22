import { cn, currencyFormatter } from '@/lib/utils';

interface CurrencyProps {
  value: string | number;
  className?: string;
}

const Currency = ({ value, className }: CurrencyProps) => {
  return (
    <p className={cn('font-semibold text-lg', className)}>
      {currencyFormatter.format(Number(value))}
    </p>
  );
};

export default Currency;
