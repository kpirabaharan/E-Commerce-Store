import { Billboard as Type } from '@/types';

interface BillboardProps {
  data: Type;
}

const Billboard = ({ data }: BillboardProps) => {
  return (
    <div className='p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden'>
      <div
        className='rounded-xl relative aspect-square md:aspect-[2.4/1] 
        overflow-hidden bg-cover'
        style={{
          backgroundImage: `url(https://ecommerce-admin-kpirabaharan-billboards.s3.amazonaws.com/${data?.imageUrl})`,
        }}
      >
        <div
          className='h-full w-full flex flex-col justify-center items-center 
          text-center gap-y-8'
        >
          <p
            className='font-bold text-3xl sm:text-5xl lg:text-6xl 
            sm:max-w-xl max-w-xs'
          >
            {data.label}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
