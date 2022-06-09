import Head from 'next/head';
import Link from 'next/link';
import { HiOutlineCheck } from 'react-icons/hi';
import 'twin.macro';

import useAuth from '../../hooks/useAuth';
import Table from '../Table/Table';

const Plans = ({ plans }) => {
  const { logout } = useAuth();

  return (
    <div>
      <Head>
        <title>Netflix</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header tw='border-b border-white/10 bg-[#141414]'>
        <Link href='/'>
          <img
            src='https://rb.gy/ulxxee'
            alt='logo'
            width={150}
            height={90}
            tw='cursor-pointer object-contain'
          />
        </Link>

        <button onClick={logout} tw='text-lg font-medium hover:underline'>
          Sign Out
        </button>
      </header>

      <main tw='pt-28 max-w-5xl px-5 pb-12 transition-all md:px-10'>
        <h1 tw='mb-3 text-3xl font-medium'>
          {`Choose the plan that's right for you`}
        </h1>

        <ul>
          <li tw='flex items-center gap-x-2 text-lg'>
            <HiOutlineCheck tw='h-7 w-7 text-[#E50914]' />
            Watch all you want. Ad-free.
          </li>
          <li tw='flex items-center gap-x-2 text-lg'>
            <HiOutlineCheck tw='h-7 w-7 text-[#E50914]' />
            Recommendations just for you.
          </li>
          <li tw='flex items-center gap-x-2 text-lg'>
            <HiOutlineCheck tw='h-7 w-7 text-[#E50914]' />
            Change or cancel your plan anytime.
          </li>
        </ul>

        <div tw='mt-4 flex flex-col space-y-4'>
          <div tw='flex w-full items-center justify-center self-end md:w-3/5'>
            {plans.map(plan => (
              <div
                key={plan.id}
                tw='relative mx-1.5 flex h-20 w-[calc(100%/3)] bg-[#E50914] cursor-pointer items-center justify-center rounded-sm font-semibold shadow after:absolute after:top-full after:left-1/2 after:block after:-translate-x-1/2 after:border-8 after:border-b-0 after:border-transparent after:border-t-[#E50914] after:content-[""] md:h-32 lg:mx-8'
              >
                {plan.name}
              </div>
            ))}
          </div>

          <Table plans={plans} />

          <button>Subscribe</button>
        </div>
      </main>
    </div>
  );
};

export default Plans;
