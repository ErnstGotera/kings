import React from 'react';
import styled from 'styled-components';

const CartItem = ({ item: { name, price, quantity } }) => (
  <CartItemContainer>
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;

export const ItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
  font-size: 20px;
`;

export default React.memo(CartItem);
