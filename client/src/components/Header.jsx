import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';
import CartDropdown from './CartDropdown';
import { ReactComponent as Logo } from '../assets/crown.svg';

const Header = ({ hidden }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <CartContainer>
      <CartIcon />
    </CartContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;

const CartContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

OptionLink.displayName = 'OptionLink';

const mapStateToProps = (state) => ({
  hidden: state.cart.hidden,
});

export default connect(mapStateToProps)(Header);
