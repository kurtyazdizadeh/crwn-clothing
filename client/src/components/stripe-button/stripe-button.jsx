import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51H77YMBnxoxxdMSrLUf1ealf2JF5bRz5UFtZZK1z9t6cQUbxQZkSFOSnUL2SYj0mBTK0qVzoX2zCp31l03SSK2hx00QQ5xJ7WJ';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'POST',
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => {
        alert('Payment Successful')
      })
      .catch(error => {
        console.log(`Payment error: ${JSON.parse(error)}`);
        alert('There was an issue with your payment. Please try again');
      });
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
};

export default StripeCheckoutButton;
