import React, { useRef, useState } from 'react'
import { Card } from 'antd';
import { MockItems } from '../services/mock';
import { Link } from 'react-router-dom';
const { Meta } = Card;

interface Props {
	text: string;
	price: number;
	description?: string;
	dumb?: boolean;
}

const CardComponent: React.FC<MockItems> = ({ price, description, id, image, title }) => {
	return (
		<Link to={`/${id}`}>
			<span className="heart-pop" />
			<Card
				hoverable
				style={{ width: 340, height: 360, padding: 10 }}
				cover={<img className="product-image" alt={title} src={image} />}
			>
				<Meta title={title} description={description.slice(0, 50)} />
				<h2>Price:  ₹{(price * 70).toFixed(2)}</h2>

			</Card>
		</Link>
	)
}

export default CardComponent
