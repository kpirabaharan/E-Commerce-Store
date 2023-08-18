import { Store } from '@/types';

const URL = `${process.env.NEXT_STORE_API_URL}`;

const getStore = async (): Promise<Store> => {
  const res = await fetch(URL);

  return res.json();
};

export default getStore;
