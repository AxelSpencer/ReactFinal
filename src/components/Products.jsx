import { useFetch } from '../hooks/useFetch';
import React from 'react';
import { Link } from 'react-router-dom';
import Box from './Box';
import Text from './Text';
import Image from './Image';
import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";

function Products() {
  const { data: product, loading, error } = useFetch('products');

  console.log(product);

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
      <>
        {product.map((product) => {
          return(
            <div key={product.id}>
                <Link to={`/product-detail/${product.id}`}>
                  <Box size="large" bgColor = {theme.box}>
                    <Image size="s" id={product.image} alt={product.title} />
                    <div>
                      <Text size = "m" color = {theme.foreground}>{product.title}</Text>
                    </div>
                  </Box>
                </Link>
            </div>
          );
        })}
      </>
    </div>
  );
}

export default Products;
