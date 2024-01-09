import { Store } from '@/types';

const getStore = async (): Promise<Store> => {
  const res = await fetch(process.env.NEXT_STORE_API_URL ?? '');

  return res.json();
};

export default getStore;
