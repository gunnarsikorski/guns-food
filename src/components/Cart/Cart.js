import React from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
	const cartItems = (
		<ul className={classes['cart-items']}>
			{[{ id: 1, name: 'Sushi', amount: 2, price: 11.99 }].map((item) => (
				<li>{item.name}</li>
			))}
		</ul>
	);

	return (
		<Modal onClose={props.onClose}>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>50 bucks</span>
			</div>
			<div className={classes.actions}>
				<button className={classes.button}>Order</button>
				<button className={classes['button--alt']} onClick={props.onClose}>
					Close
				</button>
			</div>
		</Modal>
	);
};

export default Cart;
