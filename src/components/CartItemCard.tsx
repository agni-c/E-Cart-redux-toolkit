import React, { useRef, useState } from 'react'
import { Button, Card, Input } from 'antd';
import { MockItems } from '../services/mock';
import { Link } from 'react-router-dom';
const { Meta } = Card;

interface Props {
	title: string;
	price: number;
	description: string;
	image: string,
	qty: number

}

const CartItemCard: React.FC<Props> = ({ price, description, image, title, qty }) => {
	return (
		<div className="cart-card">
			<img src={image} alt={title} className="cart-image" />
			<div className="card-cart-info">
				<h2 className="cart-title">{title}</h2>
				<div className="cart-quantity-counter">
					<Button className="btn increment"
					// onClick={(e) => qty < 10 && setQty(qty + 1)}
					>+</Button>
					<Input type="number" min={1} max={10} value={qty} />
					<Button className="btn decrement"
					// onClick={(e) => qty > 0 && setQty(qty - 1)}
					>-</Button>
				</div>
				<h3>Price:  ₹{(price * 70).toFixed(2)}</h3>
			</div>

		</div>




	)
}

export default CartItemCard
