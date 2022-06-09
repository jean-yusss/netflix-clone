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
    </div>
  );
};

export default Membership;
