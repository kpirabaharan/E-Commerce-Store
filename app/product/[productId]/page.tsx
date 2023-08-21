import getProduct from '@/actions/getProduct';
import getProducts from '@/actions/getProducts';

import Gallery from '@/components/Gallery';
import Info from '@/components/Info';
import ProductList from '@/components/product/ProductList';

import Container from '@/components/ui/container';
import { Separator } from '@/components/ui/separator';

interface ProductPageProps {
  params: { productId: string };
}

export const revalidate = 0;

const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await getProduct(params.productId);
  const suggestedproducts = await getProducts({
    categoryId: product.category.id,
  });

  return (
    <div className='bg-white'>
      <Container>
        <div className='px-4 py-10 sm:px-6 md:px-8'>
          <div className='sm:grid sm:grid-cols-2 sm:gap-x-6'>
            <Gallery images={product.images} />
            <div className='mt-6 px-4 sm:mt-0 sm:px-0'>
              <Info data={product} />
            </div>
          </div>
          <Separator className='my-8' />
          <ProductList title='Related Items' items={suggestedproducts} />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
