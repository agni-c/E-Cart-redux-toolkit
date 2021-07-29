
import React, { useState, useEffect } from 'react';
import CardComponent from '../components/Card';

import useProducts from '../hooks/useProducts';



const ProductListing: React.FC = () => {

  let products = useProducts();


  console.log({ products });
  return (
    <div className="item-container">
      {products && products.length > 0 ? products.map((items: any) => (
        <CardComponent
          description={items.description}
          key={items.id}
          id={items.id}
          image={items.image}
          price={items.price}
          title={items.title}
        />
      )) : null}
    </div>
  );
};




export default ProductListing;
