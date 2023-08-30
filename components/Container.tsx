import { PropsWithChildren } from 'react';

interface ContainerProps extends PropsWithChildren {}

export const Container = ({ children }: ContainerProps) => {
  return <div className='mx-auto max-w-7xl'>{children}</div>;
};
