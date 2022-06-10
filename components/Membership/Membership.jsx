import { useState } from 'react';
import 'twin.macro';
import Loader from '../Loader/Loader';

import useAuth from '../../hooks/useAuth';
import useSubscription from '../../hooks/useSubscription';
import { goToBillingPortal } from '../../lib/stripe';

const Membership = () => {
  const { user } = useAuth();
  const subscription = useSubscription(user);
  const [isStripeLoading, setIsStripeLoading] = useState(false);

  const manageSubscription = () => {
    if (subscription) {
      setIsStripeLoading(true);
      goToBillingPortal();
    }
  };

  return (
    <div tw='mt-6 grid grid-cols-1 gap-x-4 border px-4 md:grid-cols-4 md:border-l-0 md:border-r-0 md:border-t md:border-b-0 md:px-0'>
      <div tw='space-y-2 py-4'>
        <h2 tw='text-lg text-[gray]'>{'Membership & Billing'}</h2>

        <button
          disabled={isStripeLoading || !subscription}
          tw='h-10 w-3/5 whitespace-nowrap bg-gray-300 py-2 text-sm font-medium text-black shadow-md hover:bg-gray-200 md:w-4/5'
          onClick={manageSubscription}
        >
          {isStripeLoading ? <Loader /> : 'Cancel Membership'}
        </button>
      </div>

      <div tw='col-span-3'>
        <div tw='flex flex-col justify-between border-b border-white/10 py-4 md:flex-row'>
          <div>
            <p tw='font-medium'>{user?.email}</p>
            <p tw='text-[gray]'>Password: ********</p>
          </div>
          <div tw='md:text-right'>
            <p tw='cursor-pointer text-blue-500 hover:underline'>
              Change email
            </p>
            <p tw='cursor-pointer text-blue-500 hover:underline'>
              Change password
            </p>
          </div>
        </div>

        <div tw='flex flex-col justify-between py-4 md:flex-row md:pb-0'>
          <div>
            <p>
              {subscription?.cancel_at_period_end
                ? 'Your membership will end on '
                : 'Your next billing date is '}
              {subscription?.current_period_end}
            </p>
          </div>

          <div tw='md:text-right'>
            <p tw='cursor-pointer text-blue-500 hover:underline'>
              Manage payment info
            </p>
            <p tw='cursor-pointer text-blue-500 hover:underline'>
              Add backup payment method
            </p>
            <p tw='cursor-pointer text-blue-500 hover:underline'>
              Billing details
            </p>
            <p tw='cursor-pointer text-blue-500 hover:underline'>
              Change billing day
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
