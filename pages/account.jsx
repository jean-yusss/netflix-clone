import Head from 'next/head';
import Link from 'next/link';
import { getProducts } from '@stripe/firestore-stripe-payments';

import Membership from '../components/Membership/Membership';

import useAuth from '../hooks/useAuth';
import useSubscription from '../hooks/useSubscription';
import payments, { goToBillingPortal } from '../lib/stripe';

import * as S from '../styles/AccountPageStyles';

const AccountPage = ({ plans }) => {
	const { user, logout } = useAuth();
	const subscription = useSubscription(user);

	return (
		<>
			<Head>
				<title>Account Settings - Netflix</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<S.AccountPageHeader>
				<Link href='/'>
					<S.NetflixLogo />
				</Link>

				<Link href='/account'>
					<S.AccountIcon />
				</Link>
			</S.AccountPageHeader>

			<S.MainContainer>
				<S.AccountDetailsContainer>
					<S.AccountPageTitle>Account</S.AccountPageTitle>

					<S.AccountDetails>
						<S.MembershipIcon />
						<S.CreatedAt>Member since {subscription?.created}</S.CreatedAt>
					</S.AccountDetails>
				</S.AccountDetailsContainer>

				<Membership />

				<S.Section>
					<S.SectionTitle>Plan Details</S.SectionTitle>
					<S.PlanName>
						{plans.filter(plan => plan.id === subscription?.product)[0]?.name}
					</S.PlanName>
					<S.ChangePlan onClick={subscription && goToBillingPortal}>
						Change Plan
					</S.ChangePlan>
				</S.Section>

				<S.Section>
					<S.SectionTitle>Settings</S.SectionTitle>
					<S.SignOut onClick={logout}>Sign out of all devices</S.SignOut>
				</S.Section>
			</S.MainContainer>
		</>
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
