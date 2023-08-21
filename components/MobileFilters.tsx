'use client';

import { Color, Size } from '@/types';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetTrigger,
} from '@/components/ui/sheet';

import Filter from '@/components/Filter';

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilters = ({ sizes, colors }: MobileFiltersProps) => {
  return (
    <>
      {/* Right Side Sheet */}
      <Sheet>
        <SheetTrigger asChild>
          <Button className='lg:hidden'>Filters</Button>
        </SheetTrigger>
        <SheetContent side={'right'}>
          <SheetHeader>
            <SheetTitle>Filters</SheetTitle>
            <Filter valueKey='sizeId' name='Sizes' data={sizes} />
            <Filter valueKey='colorId' name='Colors' data={colors} />
            <SheetClose />
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileFilters;
