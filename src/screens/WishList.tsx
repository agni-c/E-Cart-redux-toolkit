
import React, { useState, useEffect } from 'react';
import WishlistCard from '../components/WishlistCard';
import { loadWishlist } from '../redux';
import { useAppDispatch, useAppSelector } from '../redux/hooks';




const Wishlist = () => {

	const wishlists = useAppSelector(state => state.wishlist.wishlist)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(loadWishlist())
	}, [])

	return (
		<div className="wishlist-container">
			{
				wishlists.length > 0 ? wishlists.map(({ id, price, image, title }) => <WishlistCard id={id} price={price} image={image} title={title} />) : "Nothing On the lists"
			}
		</div>
	);
};




export default Wishlist;
