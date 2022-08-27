import React from 'react'
import Products from './Products';

const Home = () => {
    return (<>
        <section className='content'>
            <article className="content-item">
                <div className="content-item__img">
                <img src="/assets/bg.jpg" alt="Background" />
                </div>
                <div className="content-item__title">
                    <h5 className="content-title">НОВЫЕ ПОСТУПЛЕНИЯ</h5>
                    <p className="content-title__second">
                        проверь все тренды    
                    </p>
                </div>
            </article>
            <Products/>
        </section>
        </>
    )
}

export default Home;