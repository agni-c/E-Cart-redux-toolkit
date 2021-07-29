import React, { useState, useEffect } from 'react';
import { Drawer, Button } from 'antd';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { loadCart } from '../../redux';
import CartItemCard from '../CartItemCard';

interface Props {
	onClose: () => void;
	visible: boolean
}

const DrawerComponent: React.FC<Props> = ({ onClose, visible }) => {
	const cartItems = useAppSelector(state => state.cart.cart)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(loadCart())
	}, [])
	return (
		<>

			<Drawer
				title="Your Items"
				placement="right"
				closable={true}
				onClose={onClose}
				visible={visible}
				width={500}
			>
				{cartItems.length > 0 ?
					cartItems.map(({ id, image, description, price, title, qty }) =>
						<CartItemCard key={id} image={image} id={id} description={description} price={price} qty={qty} title={title} />)
					: <p>Your Cart Is Empty</p>}

			</Drawer>
		</>
	)
}
export default DrawerComponent