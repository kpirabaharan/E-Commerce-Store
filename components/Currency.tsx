'use client';

import { currencyFormatter } from '@/lib/utils';

interface CurrencyProps {
  value: string | number;
}

const Currency = ({ value }: CurrencyProps) => {
  return (
    <div className='font-semibold text-lg'>
      {currencyFormatter.format(Number(value))}
    </div>
  );
};

export default Currency;
