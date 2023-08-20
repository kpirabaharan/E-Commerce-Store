import getProduct from '@/actions/getProduct';
import getProducts from '@/actions/getProducts';
import ProductList from '@/components/product/ProductList';
import Container from '@/components/ui/container';

interface ProductPageProps {
  params: { productId: string };
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await getProduct(params.productId);
  const suggestedproducts = await getProducts({
    categoryId: product.category.id,
  });

  return (
    <div className='bg-white'>
      <Container>
        <div className='px-4 py-10 sm:px-6 lg:px-8'>
          <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
            {/* Gallery */}
            <div>Gallery</div>
            <div className='mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0'>
              {/* Info */}
              Info
            </div>
          </div>
          <hr className='my-10' />
          <ProductList title='Related Items' items={suggestedproducts} />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
