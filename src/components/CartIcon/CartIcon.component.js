import React from 'react';
import { connect } from 'react-redux';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import { toggleCartHidden } from '../../Redux/cart/cart.actions';

import './CartIcon.styles.scss';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = ({cart: {cartItems}}) => ({
    itemCount: cartItems.reduce(((accumulatorQuantity, cartItem) => accumulatorQuantity + cartItem.quantity) , 0)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);