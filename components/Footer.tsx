import getStore from '@/actions/getStore';

const Footer = async () => {
  const store = await getStore();

  return (
    <footer className='border-t'>
      <div className='mx-auto py-10'>
        <p className='text-center text-primary text-xs'>
          &copy; 2023 {store.name}, Inc. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
