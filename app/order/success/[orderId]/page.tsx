import { redirect } from 'next/navigation';
import { format } from 'date-fns';
import { CalendarDaysIcon, MailIcon, PhoneIcon } from 'lucide-react';

import getOrder from '@/actions/getOrder';

import { Container } from '@/components/Container';
import OrderCard from '@/components/OrderCard';
import OrderList from '@/components/OrderList';
import PaymentSummary from '@/components/PaymentSummary';

import { Separator } from '@/components/ui/separator';

interface OrderSuccessPageProps {
  params: { orderId: string };
}

const OrderSuccessPage = async ({ params }: OrderSuccessPageProps) => {
  const order = await getOrder(params.orderId);

  if (!order) {
    redirect('/');
  }

  const totalPrice = order.orderItems.reduce(
    (total, item) => total + Number(item.product.price) * item.quantity,
    0,
  );

  const orderDateString = format(new Date(order.createdAt), 'MMMM do, yyyy');

  const address = order.address.split(', ');

  const formatPhoneNumber = (phoneNumberString: string) => {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      var intlCode = match[1] ? '+1 ' : '';
      return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
    }
    return null;
  };

  return (
    <Container>
      <div className='px-4 py-8 sm:px-6 lg:px-8'>
        <h1 className='text-3xl font-bold'>Order Details</h1>
        <div className='flex flex-col mt-4 col-span-3 lg:col-span-1'>
          <div className='flex flex-row gap-x-2'>
            <p className='text-base'>Order Number:</p>
            <p className='font-semibold'>{order.id}</p>
          </div>
          <div className='flex flex-row gap-x-2'>
            <p className='text-base'>Order Date:</p>
            <p className='font-semibold'>{orderDateString}</p>
          </div>
        </div>

        {/* OrderCards */}
        <div className='grid grid-cols-3 gap-x-4 lg:mt-4'>
          <OrderCard>
            <div className='flex flex-row gap-x-2'>
              <CalendarDaysIcon />
              <div className='flex flex-col gap-y-4'>
                <p className='font-bold text-base'>Shipping Address:</p>
                <div className='flex flex-col gap-y-2 font-light'>
                  <p>Standard Shipping</p>
                  <p>{order.name}</p>
                  <div className='flex flex-col'>
                    <p>{address[0]}</p>
                    <p>{address[1]},</p>
                    <p>
                      {address[2]}, {address[3]}
                    </p>
                    <p>{address[4]}</p>
                  </div>
                </div>
              </div>
            </div>
          </OrderCard>
          <OrderCard>
            <div className='flex flex-col gap-y-2'>
              <div className='flex flex-row gap-x-2'>
                <MailIcon />
                <div className='flex flex-col gap-y-2'>
                  <p className='font-bold text-base'>Shared Email Address:</p>
                  <p className='font-light'>{order.email}</p>
                </div>
              </div>
              <div className='flex flex-row gap-x-2'>
                <PhoneIcon />
                <div className='flex flex-col gap-y-2'>
                  <p className='font-bold text-base'>Shared Phone Number:</p>
                  <div className='flex flex-col gap-y-2'>
                    <p className='font-light'>
                      {formatPhoneNumber(order.phone)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </OrderCard>
        </div>

        <Separator className='mt-6 lg:mt-8' />

        {/* Order List */}
        <div className='mt-6 lg:mt-8'>
          <OrderList items={order.orderItems} />
        </div>

        {/* Payment Summary */}
        <div className='mt-8 grid grid-cols-3'>
          <PaymentSummary
            order={order}
            address={address}
            subtotal={totalPrice}
          />
        </div>
      </div>
    </Container>
  );
};

export default OrderSuccessPage;
