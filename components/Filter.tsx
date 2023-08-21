'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import qs from 'query-string';

import { Color, Size } from '@/types';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

interface FilterProps {
  valueKey: string;
  name: string;
  data: (Size | Color)[];
}

const Filter = ({ valueKey, name, data }: FilterProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedvalue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true },
    );

    router.push(url);
  };

  return (
    <div className='mb-8'>
      <h3 className='text-lg font-semibold'>{name}</h3>
      <Separator className='my-4' />
      <div className='flex flex-wrap gap-2'>
        {data.map((filter) => (
          <div key={filter.id} className='flex items-center'>
            <Button
              variant={selectedvalue === filter.id ? 'default' : 'outline'}
              onClick={() => onClick(filter.id)}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
