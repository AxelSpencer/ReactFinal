import { useContext } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import Box from './Box';
import Text from './Text';
import Image from './Image';
import Button from './Button';
import { ThemeContext } from "../ThemeContext";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

function ProductDetails() {
    const navigate = useNavigate();

    const back = () => {
        navigate('../products');
    };

    const { id } = useParams();
    const { data: product, loading, error, executePut } = useFetch(`products/${id}`);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const { theme } = useContext( ThemeContext );


    const setTrue = async (event) => {
        try {
        await executePut({ fav: "true" });
        setIsSubmitted(true);
        } catch (error) {
        }
        Swal.fire({
              title: 'Item Added',
              text: product.title,
              icon: 'success',
              confirmButtonText: 'OK',
              reverseButtons: true,
              customClass: {
                confirmButton: 'custom-confirm-button',
              },
              preConfirm: () => {
                navigate('../wishlist');
              },
            });
    };

    const setFalse = async (event) => {
        try {
        await executePut({ fav: "false" });
        setIsSubmitted(true);
        } catch (error) {
        }
        Swal.fire({
            title: 'Item Removed',
            text: product.title,
            icon: 'error',
            reverseButtons: true,
            customClass: {
              confirmButton: 'custom-confirm-button',
            },
            preConfirm: () => {
              navigate('../wishlist');
            },
          });
    };

    if(product.fav == "true"){
        return (
            <div>
                <Box size="large" bgColor = {theme.box}>
                    <Image size="m" id={product.image} alt={product.title} />
                    <div>
                        <Text size = "l" color = {theme.foreground} ><b>{product.title}</b></Text>
                        <Text size = "m" color = {theme.foreground} >{product.category}</Text>
                        <Text size = "m" color = {theme.foreground} >{product.description}</Text>
                        <Button onClick={() => back()}  bgcolor = {theme.btn} color = {theme.btncolor}>Back</Button>
                        <Button onClick={setFalse} bgcolor={theme.btnn} color={theme.btnc}>Remove from Wishlist</Button>
                    </div>
                </Box>
            </div>
        );
    }
    

    return (
        <div>
            <Box size="large" bgColor = {theme.box}>
                <Image size="m" id={product.image} alt={product.title} />
                <div>
                    <Text size = "l" color = {theme.foreground} ><b>{product.title}</b></Text>
                    <Text size = "m" color = {theme.foreground} >{product.category}</Text>
                    <Text size = "m" color = {theme.foreground} >{product.description}</Text>
                    <Button onClick={() => back()}  bgcolor = {theme.btn} color = {theme.btncolor}>Back</Button>
                    <Button onClick={setTrue} bgcolor={theme.btnp} color={theme.btnc}>Add to Wishlist</Button>
                </div>
            </Box>
        </div>
    );
}

export default ProductDetails;
