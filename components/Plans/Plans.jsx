import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import tw from 'twin.macro';

import useAuth from '../../hooks/useAuth';
import Table from '../Table/Table';
import Loader from '../Loader/Loader';
import { loadCheckout } from '../../lib/stripe';
import { useRecoilState } from 'recoil';
import { planState, selectedPlanState } from '../..//atoms/planAtom';
import PlansHeading from '../PlansHeading/PlansHeading';

const PlansPage = ({ plans }) => {
  const { logout, user } = useAuth();
  const [selectedPlan, setSelectedPlan] = useRecoilState(selectedPlanState);
  const [plansArray, setPlansArray] = useRecoilState(planState);
  const [isStripeLoading, setIsStripeLoading] = useState(false);

  useEffect(() => {
    setSelectedPlan(plans[2]);
    setPlansArray(plans);
  }, [plans]);

  const subscribeToPlan = () => {
    if (!user) return;

    loadCheckout(selectedPlan?.prices[0]?.id);
    setIsStripeLoading(true);
  };

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

      <main tw='pt-28 max-w-5xl px-5 pb-12 transition-all mx-auto md:px-10'>
        <PlansHeading />

        <div tw='mt-4 flex flex-col space-y-4'>
          <div tw='flex w-full items-center justify-center self-end md:w-3/5'>
            {plans.map(plan => (
              <div
                key={plan.id}
                tw='relative mx-1.5 flex h-20 w-[calc(100%/3)] bg-[#E50914] cursor-pointer items-center justify-center rounded-sm font-semibold shadow after:absolute after:top-full after:left-1/2 after:block after:-translate-x-1/2 after:border-8 after:border-b-0 after:border-transparent after:border-t-[#E50914] after:content-[""] md:h-32 lg:mx-8'
                css={
                  selectedPlan?.id === plan.id
                    ? tw`opacity-100`
                    : tw`opacity-60`
                }
                onClick={() => setSelectedPlan(plan)}
              >
                {plan.name}
              </div>
            ))}
          </div>

          <Table />

          <button
            disabled={!selectedPlan || isStripeLoading}
            tw='mx-auto w-11/12 rounded bg-[#E50914] py-4 text-xl shadow hover:bg-[#F6121D] md:w-[420px]'
            css={isStripeLoading && tw`opacity-60`}
            onClick={subscribeToPlan}
          >
            {isStripeLoading ? <Loader /> : 'Subscribe'}
          </button>
        </div>
      </main>
    </div>
  );
};

export default PlansPage;
