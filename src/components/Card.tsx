import React, { useRef, useState } from 'react'
import { Card } from 'antd';
import { MockItems } from '../services/mock';
const { Meta } = Card;

interface Props {
	text: string;
	price: number;
	description?: string;
	dumb?: boolean;
}

const CardComponent: React.FC<MockItems> = ({ price, description, id, image, title }) => {
	return (
		<Card
			hoverable
			style={{ width: 340, height: 360, padding: 10 }}
			cover={<img className="product-image" alt={title} src={image} />}
		>
			<Meta title={title} description={description.slice(0, 50)} />
			<h2>Price: ${price}</h2>

		</Card>
	)
}

export default CardComponent
