import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom';

const Products = () => {

const [data, setData] = useState([]);
const [filter, setFilter] = useState(data);
let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch('http://fakestoreapi.com/products');
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
            }

            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);

const filterProduct = (cat) => {
    const updatedList = data.filter((x)=>x.category === cat);
    setFilter(updatedList);
}

const ShowProducts = () => {
    return (
        <>
            <div className='button-category'>
                <button className='button-category__all' 
                onClick={()=>setFilter(data)}>Все</button>
                <button className='button-category__all' 
                onClick={()=>filterProduct("men's clothing")}>Мужская одежда</button>
                <button className='button-category__all' 
                onClick={()=>filterProduct("women's clothing")}>Женская одежда</button>
                <button className='button-category__all' 
                onClick={()=>filterProduct("jewelery")}>Украшения</button>
                <button className='button-category__all' 
                onClick={()=>filterProduct("electronics")}>Электроника</button>
            </div>
            <hr />
            <br />
            <div className='products-grid'>
                {filter.map((product) => {
                    return (
                        <>
                            <div className='products-card'>
                                <div className='products-card__item' key={product.id}>
                                    <div className='card-img'>
                                        <img src={product.image}
                                        alt={product.title} />
                                    </div>
                                    <div className="card-body">
                                        <h4 className='product-title'>{product.title.substring(0, 20)}...</h4>
                                        <p className='product-price'>
                                            ${product.price}
                                        </p>
                                        <Link to={`/products/${product.id}`} className="button-buy">Купить</Link>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
        </>
        )
    }

    return (
        <>
            <div className='products'>
                <div className='products-category__title'>
                    <h1 className=''>Тренды IT's COLLECTION</h1>  
                </div>
                <div className='products-item'>
                    <ShowProducts />
                </div>
                 <hr />
                <article className='footer-home'>
                    <p>
                        Все права защищены.
                    </p>
                </article>
            </div>
        </>
    )
}

export default Products;