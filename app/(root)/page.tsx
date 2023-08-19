import getBillboard from '@/actions/getBillboard';
import getProducts from '@/actions/getProducts';

import Container from '@/components/ui/container';
import Billboard from '@/components/Billboard';
import ProductList from '@/components/product/ProductList';

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard('0e42dbc5-aeea-4b84-b816-071a9b20b643');
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className='pb-10'>
        <Billboard data={billboard} />
      </div>
      <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 pb-10'>
        <ProductList title='Featured Products' items={products} />
      </div>
    </Container>
  );
};

export default HomePage;
