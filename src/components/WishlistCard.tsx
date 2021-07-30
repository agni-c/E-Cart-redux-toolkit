import React, { useEffect } from 'react'
import { RiDeleteBin6Fill as Trash } from "react-icons/ri"
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { loadWishlist, removeFromWishlist, tagOnWishlist } from '../redux';

interface Props {
	title: string;
	price: number;
	image: string,
	id: number
}

const WishlistCard = ({ price, id, image, title }: Props) => {
	const dispatch = useAppDispatch()

	return (
		<div className="wishlist-card">
			<img src={image} alt={title} className="wishlist-image" />
			<div className="card-wishlist-info">
				<h2 className="wishlist-title">{title}</h2>
				<div className="wishlist-actions">
					<Trash onClick={() => {
						dispatch(removeFromWishlist({ id }))
						dispatch(tagOnWishlist({ id }))

					}} className="delete-item" />
				</div>
				<h3>Price:  ₹{(price * 70).toFixed(2)}</h3>
			</div>

		</div>

	)
}

export default WishlistCard
