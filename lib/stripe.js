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
    .catch(err => console.error(err.message));
};

export default payments;