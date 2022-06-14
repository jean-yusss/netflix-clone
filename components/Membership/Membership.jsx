import { useState } from 'react';

import Loader from '../Loader/Loader';

import useAuth from '../../hooks/useAuth';
import useSubscription from '../../hooks/useSubscription';
import { goToBillingPortal } from '../../lib/stripe';

import * as S from './MembershipStyles';

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
		<S.MembershipContainer>
			<S.MembershipHeading>
				<S.MembershipTitle>{'Membership & Billing'}</S.MembershipTitle>

				<S.CancelMembershipButton
					disabled={isStripeLoading || !subscription}
					onClick={manageSubscription}
				>
					{isStripeLoading ? <Loader /> : 'Cancel Membership'}
				</S.CancelMembershipButton>
			</S.MembershipHeading>

			<S.UserPanel>
				<S.MembershipDetails>
					<S.EmailAndPasswordContainer>
						<S.Email>{user?.email}</S.Email>
						<S.Password>Password: ********</S.Password>
					</S.EmailAndPasswordContainer>

					<S.MembershipLinkContainer>
						<S.MembershipLink>Change email</S.MembershipLink>
						<S.MembershipLink>Change password</S.MembershipLink>
					</S.MembershipLinkContainer>
				</S.MembershipDetails>

				<S.BillingDetails>
					<>
						<S.BillingDate>
							{subscription?.cancel_at_period_end
								? 'Your membership will end on '
								: 'Your next billing date is '}
							{subscription?.current_period_end}
						</S.BillingDate>
					</>

					<S.MembershipLinkContainer>
						<S.MembershipLink>Manage payment info</S.MembershipLink>
						<S.MembershipLink>Add backup payment method</S.MembershipLink>
						<S.MembershipLink>Billing details</S.MembershipLink>
						<S.MembershipLink>Change billing day</S.MembershipLink>
					</S.MembershipLinkContainer>
				</S.BillingDetails>
			</S.UserPanel>
		</S.MembershipContainer>
	);
};

export default Membership;
