import { getFunctions, httpsCallable } from '@firebase/functions';
import toast from 'react-hot-toast';

import {
	createCheckoutSession,
	getStripePayments
} from '@stripe/firestore-stripe-payments';

import app from './firebase';

const payments = getStripePayments(app, {
	customersCollection: 'customers',
	productsCollection: 'plans'
});

export const loadCheckout = async priceId => {
	await createCheckoutSession(payments, {
		price: priceId,
		success_url: window.location.origin,
		cancel_url: window.location.origin
	})
		.then(snapshot => window.location.assign(snapshot.url))
		.catch(err => toast.error(err.message));
};

export const goToBillingPortal = async () => {
	const instance = getFunctions(app, 'us-central1');

	const functionRef = httpsCallable(
		instance,
		'ext-firestore-stripe-payments-createPortalLink'
	);

	toast.loading('Redirecting to Stripe...');

	await functionRef({
		returnUrl: `${window.location.origin}/account`
	})
		.then(({ data }) => window.location.assign(data.url))
		.catch(err => toast.error(err.message));
};

export default payments;
