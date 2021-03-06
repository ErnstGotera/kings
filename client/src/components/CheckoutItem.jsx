import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { clearItemFromCart, addItem, removeItem } from '../redux/cart/actions';

export const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, price, category, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <TextContainer>{name}</TextContainer>
      <TextContainer>{category}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  @media screen and (max-width: 800px) {
    font-size: 18px;
  }
`;

const TextContainer = styled.span`
  width: 23%;
  @media screen and (max-width: 800px) {
    width: 22%;
  }
`;

const QuantityContainer = styled(TextContainer)`
  display: flex;
  span {
    margin: 0 10px;
  }
  div {
    cursor: pointer;
  }
`;

QuantityContainer.displayName = 'QuantityContainer';

const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

RemoveButtonContainer.displayName = 'RemoveButtonContainer';

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
