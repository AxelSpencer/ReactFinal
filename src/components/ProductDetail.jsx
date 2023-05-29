import { useContext } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import Box from './Box';
import Text from './Text';
import Image from './Image';
import Button from './Button';
import { ThemeContext } from "../ThemeContext";

function ProductDetails() {
    const navigate = useNavigate();

    const back = () => {
        navigate('../products');
    };

    const { id } = useParams();
    const { data: product, loading, error } = useFetch(`products/${id}`);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const { theme } = useContext( ThemeContext );

    return (
        <div>
            <Box size="large" bgColor = {theme.box}>
                <Image size="m" id={product.image} alt={product.title} />
                <div>
                    <Text size = "l" color = {theme.foreground} ><b>{product.title}</b></Text>
                    <Text size = "m" color = {theme.foreground} >{product.category}</Text>
                    <Text size = "m" color = {theme.foreground} >{product.description}</Text>
                    <Button onClick={() => back()}  bgcolor = {theme.btn} color = {theme.btncolor}>Back</Button>
                </div>
            </Box>
        </div>
    );
}

export default ProductDetails;
