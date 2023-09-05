import { intersectionBy, map } from 'lodash';

import getProducts from '@/actions/getProducts';
import getSizes from '@/actions/getSizes';
import getColors from '@/actions/getColors';
import getCategory from '@/actions/getCategory';

import { Container } from '@/components/Container';
import Billboard from '@/components/Billboard';
import Filter from '@/components/Filter';
import MobileFilters from '@/components/MobileFilters';
import NoResults from '@/components/NoResults';
import ProductCard from '@/components/product/ProductCard';

export const revalidate = 0;

interface CategoryPageProps {
  params: { categoryId: string };
  searchParams: { colorId: string; sizeId: string };
}

const CategoryPage = async ({ params, searchParams }: CategoryPageProps) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });
  const category = await getCategory(params.categoryId);

  const productSizes = products.map((product) => ({ id: product.size.id }));
  var sizes = await getSizes();
  sizes = intersectionBy(sizes, productSizes, 'id');

  const productColors = products.map((product) => ({ id: product.color.id }));
  var colors = await getColors();
  colors = intersectionBy(colors, productColors, 'id');

  return (
    <Container>
      <Billboard data={category.billboard} />
      <div className='px-4 sm:px-6 lg:px-8 pb-24'>
        <div className='lg:grid lg:grid-cols-5 lg:gap-x-8'>
          <MobileFilters sizes={sizes} colors={colors} />
          <div className='hidden lg:block'>
            <Filter valueKey='sizeId' name='Sizes' data={sizes} />
            <Filter valueKey='colorId' name='Colors' data={colors} />
          </div>
          <div className='mt-6 lg:col-span-4 lg:mt-0'>
            {products.length == 0 && <NoResults />}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              {products.map((item) => (
                <ProductCard key={item.id} data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CategoryPage;
