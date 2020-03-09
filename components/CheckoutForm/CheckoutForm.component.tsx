import { useState } from 'react';

import FormInput from '../FormInput/FormInput.component';
import CustomButton from '../CustomButton/CustomButton.component';

import { FormContainer } from './CheckoutForm.styles';

const CheckoutForm = () => {
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: ''
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert('Your order was a success!');
  };

  const handleChange = () => {
    // const { name, value } = event.target;

    // useState({ ...shippingInfo, ...{ [name]: value } });
    console.log('aaa');
  };

  const { firstName, lastName, email, address, city } = shippingInfo;
  return (
    <>
      <h2>Shipping adress</h2>
      <FormContainer onSubmit={e => handleSubmit(e)}>
        <FormInput type="text" name="firstName" value={firstName} label="First Name" required />
        <FormInput type="text" name="lastName" value={lastName} label="Last Name" required />
        <FormInput type="text" name="address" value={address} label="Address" required />
        <FormInput type="text" name="city" value={city} label="City" required />
        <FormInput type="email" name="email" value={email} label="Email" required />
        <CustomButton type="submit">Proced to payment</CustomButton>
      </FormContainer>
    </>
  );
};

export default CheckoutForm;
