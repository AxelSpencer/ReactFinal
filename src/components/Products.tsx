import { useFetch } from '../hooks/useFetch';
import React from 'react';
import { Link } from 'react-router-dom';
import Box from './Box';
import Text from './Text';
import Image from './Image';
import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";
import { ProductListRow } from './ProductListRow';

function Products() {
  const { data: product, loading, error } = useFetch('products');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const { theme } = useContext( ThemeContext );

  return (
    <div>
      <Text size = "l" color = {theme.foreground}><b>Products</b></Text>
        {product.map((product) => {
          return <ProductListRow key={product.id} product={product} />;
        })}
    </div>
  );
}

export default Products;
