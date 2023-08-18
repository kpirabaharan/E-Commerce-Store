import Link from 'next/link';

import getCategories from '@/actions/getCategories';

import Container from '@/components/ui/Container';
import NavRoutes from '@/components/NavRoutes';

const Navbar = async () => {
  const categories = await getCategories();
  console.log({ categories });

  return (
    <div className='border-b'>
      <Container>
        <div className='relative px-4 sm:px-6 lg:px8 flex h-16 items-center'>
          <Link href={'/'} className='ml-4 flex lg:ml-0 gap-x-2'>
            <p className='font-bold text-xl'>Store</p>
          </Link>
          <NavRoutes data={categories} />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
