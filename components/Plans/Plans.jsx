import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import Table from '../Table/Table';
import Loader from '../Loader/Loader';
import PlansHeading from '../PlansHeading/PlansHeading';

import useAuth from '../../hooks/useAuth';
import { loadCheckout } from '../../lib/stripe';
import { planState, selectedPlanState } from '../..//atoms/planAtom';

import * as S from './PlansStyles';

const PlansPage = ({ plans }) => {
	const { logout, user } = useAuth();

	const setPlansArray = useSetRecoilState(planState);
	const [selectedPlan, setSelectedPlan] = useRecoilState(selectedPlanState);

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
		<>
			<Head>
				<title>Netflix</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<S.Header>
				<Link href='/'>
					<S.NetflixLogo />
				</Link>

				<S.SignOutButton onClick={logout}>Sign Out</S.SignOutButton>
			</S.Header>

			<S.PlansContainer>
				<PlansHeading />

				<S.PlansBoxContainer>
					<S.PlansBox>
						{plans.map(plan => (
							<S.Plan
								$selectedPlan={selectedPlan}
								$plan={plan}
								key={plan.id}
								onClick={() => setSelectedPlan(plan)}
							>
								{plan.name}
							</S.Plan>
						))}
					</S.PlansBox>

					<Table />

					<S.SubscribeButton
						$isStripeLoading={isStripeLoading}
						disabled={!selectedPlan || isStripeLoading}
						onClick={subscribeToPlan}
					>
						{isStripeLoading ? <Loader /> : 'Subscribe'}
					</S.SubscribeButton>
				</S.PlansBoxContainer>
			</S.PlansContainer>
		</>
	);
};

export default PlansPage;
