
import React, { useState, useEffect } from 'react';
import CardComponent from '../components/Card';


import { useDispatch, useSelector } from "react-redux"
import useProducts from '../hooks/useProducts';



const ProductListing: React.FC = () => {

  let products = useProducts();


  console.log({ products });
  return (
    <div className="item-container">
      {products.length > 0 && products.map((items: any) => (
        <CardComponent
          description={items.description}
          id={items.id}
          image={items.image}
          price={items.price}
          title={items.title}
        />
      ))}
    </div>
  );
};




export default ProductListing;
