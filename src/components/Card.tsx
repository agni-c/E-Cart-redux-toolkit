import React, { useRef, useState } from 'react'
import { Card } from 'antd';
import { MockItems } from '../services/mock';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../redux/hooks';
import { addToWishlist, tagOnWishlist } from '../redux';
const { Meta } = Card;

interface Props {
	price: number,
	description: string,
	id: number,
	image: string,
	title: string
	inWishlist: boolean
}

const CardComponent = ({ price, description, id, image, title, inWishlist }: Props) => {
	const dispatch = useAppDispatch()

	return (
		<div>
			<span
				onClick={() => {
					dispatch(tagOnWishlist({ id }))
					dispatch(addToWishlist({ id, title, price, image }))
				}}
				className={`heart-pop ${inWishlist ? "popped" : ""}`} />
			<Link to={`/${id}`}>

				<Card
					hoverable
					style={{ width: 340, height: 360, padding: 10 }}
					cover={<img className="product-image" alt={title} src={image} />}
				>
					<Meta title={title} description={description.slice(0, 50)} />
					<h2>Price:  ₹{(price * 70).toFixed(2)}</h2>

				</Card>
			</Link>
		</div>
	)
}

export default CardComponent
