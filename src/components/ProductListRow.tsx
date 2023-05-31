import { Link } from 'react-router-dom';
import React from 'react';
import Box from './Box';
import Text from './Text';
import Image from './Image';
import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";

interface Props {
  product: Product;
}

export const ProductListRow = ({ product }: Props) => {
  const { theme } = useContext( ThemeContext );

  return (
    <Link key={product.id} to={`/product-detail/${product.id}`}>
      <Box size="large" bgColor = {theme.box}>
      {product.fav == "true" && <Text size="m" color={theme.foreground}>⭐</Text>}
        <Image size="s" id={product.image} alt={product.title} />
        <div>
          <Text size = "m" color = {theme.foreground}>{product.title}</Text>
        </div>
      </Box>
    </Link>
  );
};
