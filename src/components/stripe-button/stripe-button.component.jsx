import React from 'react';
import { connect } from 'react-redux';
import { clearCart } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';
// import axios from "axios";

const StripeCheckoutButton = ({ price, dispatch }) => {
  const checkout = () => {
    dispatch(clearCart());
    alert('Thanks for buying');
  };
  return <CustomButton onClick={checkout}>Checkout</CustomButton>;
};

export default connect()(StripeCheckoutButton);
