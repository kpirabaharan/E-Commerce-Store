'use client';

import { useState } from 'react';
import Image from 'next/image';

import { Image as ImageType } from '@/types';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface GalleryProps {
  images: ImageType[];
}

const Gallery = ({ images }: GalleryProps) => {
  const [active, setActive] = useState<string>(images[0].id);

  return (
    <Tabs defaultValue={images[0].id} className='space-y-2 w-full'>
      <div className='h-[400px] relative bg-gray-200 rounded-md'>
        {images.map((image) => (
          <TabsContent key={image.id} value={image.id}>
            <Image
              src={image.url}
              className='object-contain'
              alt='image'
              fill
            />
          </TabsContent>
        ))}
      </div>
      <TabsList className='h-[100px] gap-x-4'>
        {images.map((image) => (
          <div key={image.id} className='w-[100px] h-full relative'>
            <TabsTrigger value={image.id} onClick={() => setActive(image.id)}>
              <Image
                src={image.url}
                alt='image'
                className={`object-cover rounded-sm border ${
                  active === image.id && 'border-black'
                }`}
                fill
              />
            </TabsTrigger>
          </div>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default Gallery;
