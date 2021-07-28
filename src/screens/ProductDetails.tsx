import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { addToCart, getProductDetails } from '../redux';
import { Image, Button, Input } from 'antd';
import LoadingCard from '../components/LoadingCard';


const ProductDetails: React.FC = () => {
	const dispatch = useAppDispatch()
	const currentProd = useAppSelector((state) => state.product.currentProduct);
	const { id } = useParams<{ id: string }>()

	const [ qty, setQty ] = useState(1)
	const [ isLoading, setIsLoading ] = useState(true)


	useEffect(() => {
		setIsLoading(true)
		dispatch(getProductDetails(parseInt(id)))
		setIsLoading(false)

	}, [])

	return (
		<>
			{
				currentProd && !isLoading ?
					(<div className="item-details">
						<div className="product-display-img">
							<Image height="100%" src={currentProd.image} />
						</div>
						<div className="product-display-info">
							<h1 className="product-display-title">
								{currentProd.title}
							</h1>
							<p className="product-display-desc">
								{currentProd.description}
							</p>
							<h1 className="product-display-price">
								Rs.{(currentProd.price * 70).toFixed(2)}
							</h1>
							<div className="product-quantity-counter">
								<Button className="btn increment" onClick={(e) => qty < 10 && setQty(qty + 1)}>+</Button>
								<Input type="number" min={1} max={10} value={qty} />
								<Button className="btn decrement" onClick={(e) => qty > 0 && setQty(qty - 1)}>-</Button>
							</div>
							<Button onClick={() => {
								dispatch(addToCart({ ...currentProd, qty }))
							}} type="primary" className="product-add-to-cart">
								ADD TO CART
							</Button>
						</div>
					</div>)
					: <LoadingCard />
			}
		</ >
	);
};




export default ProductDetails;