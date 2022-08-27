import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {addCart} from '../redux/action'
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
const Product = () => {

    const {id} = useParams();
    const [product, setProduct] = useState([]);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }

    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
        }
        getProduct();
    }, []);

    const ShowProduct = () => {
        return(
        <div className='wrapper-product__buy'>
            <hr />
            <div className='product-buy'>
                <div className='product-img' key={product.id}>
                    <img src={product.image} alt={product.title}/>
                </div>

                <div className='product-info'>
                    <p className='product-category'>
                        {product.category}
                    </p>
                    <h2 className='product-title__info'>{product.title}</h2>
                    <p className='product-rating'>
                        Рейтинг {product.rating && product.rating.rate}
                    </p>
                    <p className='product-price__info'>${product.price}</p>
                    <p className='description-product'>{product.description}</p>
                    <div className='button-cart'>
                        <button className='add-cart' onClick={()=>addProduct(product)}>Добавить</button>
                        <Link to='/cart' className='go-cart'>В корзину</Link>
                    </div>
                </div>
            </div>
            <hr />
                <article className='footer-product__buy'>
                    <p>
                        Все права защищены.
                    </p>
                </article>
        </div>
        )
    }

    return (
        <>
            <div>
                <ShowProduct/>
            </div>
        </>
    )

}

export default Product;