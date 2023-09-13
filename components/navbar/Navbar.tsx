import Link from 'next/link';

import getCategories from '@/actions/getCategories';
import getStore from '@/actions/getStore';

import NavRoutes from '@/components/navbar/NavRoutes';
import NavbarActions from '@/components/navbar/NavbarActions';

import { Container } from '@/components/Container';

export const revalidate = 0;

interface NavbarProps {
  name: string;
  theme: string;
}

const Navbar = async ({ name, theme }: NavbarProps) => {
  const categories = await getCategories();

  return (
    <div className='border-b'>
      <Container>
        <div className='relative px-4 sm:px-6 lg:px-8 flex h-16 items-center'>
          <Link href={'/'} className='flex gap-x-2'>
            <p className='font-bold text-primary text-xl'>{name}</p>
          </Link>
          <NavRoutes data={categories} />
          <NavbarActions theme={theme} />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
