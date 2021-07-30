
import React, { useState, useEffect } from 'react';
import CardComponent from '../components/Card';

import useProducts from '../hooks/useProducts';

import { Spin, Space } from "antd"

const ProductListing = () => {

  let products = useProducts();


  console.log(products);
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
          inWishlist={items.inWishlist}
        />
      )) : <Space style={{ display: "grid", color: "red", placeItems: "center", width: "100vw", height: "80vh" }} size="large">
        <Spin size="large" />
      </Space>}
    </div>
  );
};




export default ProductListing;
