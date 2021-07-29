import React, { useRef, useState } from 'react'
import { Button, Card, Input } from 'antd';
import { MockItems } from '../services/mock';
import { Link } from 'react-router-dom';
const { Meta } = Card;
import { RiDeleteBin6Fill as Trash } from "react-icons/ri"
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { adjustQty, removeFromCart } from '../redux';

interface Props {
	title: string;
	price: number;
	description: string;
	image: string,
	qty: number
	id: number

}

const CartItemCard: React.FC<Props> = ({ price, description, id, image, title, qty }) => {
	const dispatch = useAppDispatch()

	return (
		<div className="cart-card">
			<img src={image} alt={title} className="cart-image" />
			<div className="card-cart-info">
				<h2 className="cart-title">{title}</h2>
				<div className="cart-actions">
					<div className="cart-quantity-counter">
						<Button className="btn increment"

							onClick={() => dispatch(adjustQty({ id, qty: 1 }))}
						>+</Button>
						<Input type="number" min={1} max={10} value={qty} />
						<Button className="btn decrement"
							disabled={qty === 1}
							onClick={() => dispatch(adjustQty({ id, qty: -1 }))}

						>-</Button>
					</div>
					<Trash onClick={() => dispatch(removeFromCart({ id }))} className="delete-item" />
				</div>
				<h3>Price:  ₹{(price * 70).toFixed(2)}</h3>
			</div>

		</div>




	)
}

export default CartItemCard
