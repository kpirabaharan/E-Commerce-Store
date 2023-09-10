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
    <Tabs
      defaultValue={images[0].id}
      className='space-y-2 w-full flex flex-col'
    >
      {images.map((image) => (
        <TabsContent
          key={image.id}
          value={image.id}
          className='aspect-square max-h-[400px] relative rounded-md bg-muted'
        >
          <Image
            src={image.url}
            className='object-contain rounded-md'
            alt='image'
            fill
          />
        </TabsContent>
      ))}

      <TabsList className='h-[100px] gap-x-4 justify-start'>
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
