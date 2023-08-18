import { Product } from '@/types';

interface ProductListProps {
  title: string;
  items: Product[];
}

const ProductList = ({ title, items }: ProductListProps) => {
  return (
    <div className='space-y-4'>
      <h3>{title}</h3>
      {items.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};

export default ProductList;
