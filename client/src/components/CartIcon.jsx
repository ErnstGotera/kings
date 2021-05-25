import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { ReactComponent as ShoppingIconSVG } from '../assets/shopping-bag.svg';
import { toggleCartHidden } from '../redux/cart/actions';

export const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartContainer onClick={toggleCartHidden}>
    <ShoppingIcon />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartContainer>
);

export const CartContainer = styled.div`
  margin-right: 30px;
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

CartContainer.displayName = 'CartContainer';

export const ShoppingIcon = styled(ShoppingIconSVG)`
  width: 28px;
  height: 28px;
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 12px;
  font-weight: bold;
  bottom: 12px;
`;

ItemCountContainer.displayName = 'ItemCountContainer';

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
  itemCount: state.cart.cartItems.reduce(
    (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
    0
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
