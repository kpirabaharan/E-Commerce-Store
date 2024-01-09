import qs from 'query-string';

import { Product } from '@/types';

const URL = `${process.env.NEXT_API_URL}/products`;

interface Query {
  categoryId?: string;
  sizeId?: string;
  colorId?: string;
  isFeatured?: boolean;
}

const getProducts = async ({
  categoryId,
  sizeId,
  colorId,
  isFeatured,
}: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: { categoryId, sizeId, colorId, isFeatured },
  });
  const res = await fetch(url);

  return res.json();
};

export default getProducts;
