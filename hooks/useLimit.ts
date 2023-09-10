import useSWR from 'swr';

import fetcher from '@/lib/fetcher';

const useLimit = () => {
  const { data, error, isLoading } = useSWR(
    process.env.NEXT_PUBLIC_STORE_API_URL,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );

  const limit = isLoading || error ? 5 : data.limit;

  return { limit, error, isLoading };
};

export default useLimit;
