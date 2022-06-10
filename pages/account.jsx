import { getProducts } from '@stripe/firestore-stripe-payments';
import Head from 'next/head';
import Link from 'next/link';
import 'twin.macro';
import Membership from '../components/Membership/Membership';
import useAuth from '../hooks/useAuth';
import useSubscription from '../hooks/useSubscription';
import payments, { goToBillingPortal } from '../lib/stripe';

const AccountPage = ({ plans }) => {
  const { user, logout } = useAuth();
  const subscription = useSubscription(user);

  return (
    <div>
      <Head>
        <title>Account Settings - Netflix</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header tw='bg-[#141414]'>
        <Link href='/'>
          <img
            src='https://rb.gy/ulxxee'
            alt='logo'
            width={120}
            height={120}
            tw='cursor-pointer object-contain'
          />
        </Link>

        <Link href='/account'>
          <img
            src='https://rb.gy/g1pwyx'
            alt='account'
            tw='cursor-pointer rounded'
          />
        </Link>
      </header>

      <main tw='pt-24 mx-auto max-w-6xl px-5 pb-12 transition-all md:px-10'>
        <div tw='flex flex-col gap-x-4 md:flex-row md:items-center'>
          <h1 tw='text-3xl md:text-4xl'>Account</h1>

          <div tw='-ml-0.5 flex items-center gap-x-1.5'>
            <img src='https://rb.gy/4vfk4r' alt='membership' tw='h-7 w-7' />
            <p tw='text-xs font-semibold text-[#555]'>
              Member since {subscription?.created}
            </p>
          </div>
        </div>

        <Membership />

        <div tw='mt-6 grid grid-cols-1 gap-x-4 border p-4 md:grid-cols-4 md:border-l-0 md:border-r-0 md:border-t md:border-b-0 md:px-0 md:pb-0 '>
          <h2 tw='text-lg text-[gray]'>Plan Details</h2>
          <div tw='col-span-2 font-medium'>
            {plans.filter(plan => plan.id === subscription?.product)[0]?.name}
          </div>
          <p
            onClick={subscription && goToBillingPortal}
            tw='cursor-pointer text-blue-500 hover:underline md:text-right'
          >
            Change Plan
          </p>
        </div>

        <div tw='mt-6 grid grid-cols-1 gap-x-4 border p-4 md:grid-cols-4 md:border-l-0 md:border-r-0 md:border-t md:border-b-0 md:px-0 md:pb-0 '>
          <h2 tw='text-lg text-[gray]'>Settings</h2>
          <p
            onClick={logout}
            tw='col-span-3 cursor-pointer text-blue-500 hover:underline'
          >
            Sign out of all devices
          </p>
        </div>
      </main>
    </div>
  );
};

export default AccountPage;

export const getStaticProps = async () => {
  const plans = await getProducts(payments, {
    includePrices: true,
    activeOnly: true
  })
    .then(res => res)
    .catch(err => console.error(err.message));

  return {
    props: {
      plans
    }
  };
};
