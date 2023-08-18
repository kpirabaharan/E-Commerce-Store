import Link from 'next/link';

import getCategories from '@/actions/getCategories';
import getStore from '@/actions/getStore';

import Container from '@/components/ui/Container';
import NavRoutes from '@/components/NavRoutes';
import NavbarActions from '@/components/NavbarActions';

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();
  const store = await getStore();

  return (
    <div className='border-b'>
      <Container>
        <div className='relative px-4 sm:px-6 lg:px8 flex h-16 items-center'>
          <Link href={'/'} className='ml-4 flex lg:ml-0 gap-x-2'>
            <p className='font-bold text-xl'>{store.name}</p>
          </Link>
          <NavRoutes data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
