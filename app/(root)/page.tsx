import getBillboard from '@/actions/getBillboard';

import Container from '@/components/ui/Container';
import Billboard from '@/components/Billboard';

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard('79f5db4d-732d-4403-9970-68ba124d6e88');

  return (
    <Container>
      <div className='pb-10'>
        <Billboard data={billboard} />
      </div>
    </Container>
  );
};

export default HomePage;
