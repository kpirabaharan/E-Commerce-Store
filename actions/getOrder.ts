import { Order } from '@/types';

const URL = `${process.env.NEXT_API_URL}/orders`;

const getOrder = async (id: string): Promise<Order> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getOrder;
