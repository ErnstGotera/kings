import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { connect } from 'react-redux';
import CheckoutItem from '../components/CheckoutItem';
import Form from '../components/Form';

const CheckoutPage = ({ cartItems, total }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Category</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalContainer>TOTAL: ${total}</TotalContainer>
      <Button
        color='primary'
        disabled={total < 1}
        variant='contained'
        onClick={handleOpen}
      >
        Submit your order
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        <FormContainer>
          <Form />
        </FormContainer>
      </Modal>
    </CheckoutPageContainer>
  );
};

const FormContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #212121;
  text-align: center;
  border-radius: 5px;
`;

const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  button {
    margin-left: auto;
    margin-top: 50px;
  }
  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

const CheckoutHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }
  @media screen and (max-width: 800px) {
    width: 22%;
    &:last-child {
      width: 12%;
    }
  }
`;

const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
  total: state.cart.cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
    0
  ),
});

export default connect(mapStateToProps)(CheckoutPage);
