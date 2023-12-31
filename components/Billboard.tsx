import { Billboard as Type } from '@/types';

interface BillboardProps {
  data: Type;
}

const Billboard = ({ data }: BillboardProps) => {
  return (
    <div className='p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden'>
      <div
        className='rounded-xl relative aspect-[1.5/1] md:aspect-[2.4/1] 
        overflow-hidden bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: `url(${data?.imageUrl})`,
        }}
      >
        <div
          className='h-full w-full flex flex-col justify-center items-center 
          text-center gap-y-8'
        >
          <h1
            className='font-bold text-3xl sm:text-5xl lg:text-6xl 
            sm:max-w-xl max-w-xs text-white'
          >
            {data.label}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
