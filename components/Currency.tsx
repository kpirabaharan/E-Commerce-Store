import { currencyFormatter } from '@/lib/utils';

interface CurrencyProps {
  value: string | number;
  className?: string;
}

const Currency = ({
  value,
  className = 'font-semibold text-lg',
}: CurrencyProps) => {
  return <p className={className}>{currencyFormatter.format(Number(value))}</p>;
};

export default Currency;
