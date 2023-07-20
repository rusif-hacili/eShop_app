import React from 'react';
import Product from './Product';
import "./Home.css";

function Home() {
    return (
        <>
            <div className="home">
                <div className="home__container">
                    <img src="https://www.x-cart.com/img/16591/ecommerce-p800.jpg" alt="" className='home__image' />

                    <div className="home__row">
                        <Product
                            id="123321"
                            title="Bennett™ Mystic Formal Business Briefcase Bag Crossbody Messenger College Bags For Men Women MacBook INoteBook ITablet Laptop Upto 15.6 Inch | Handbags with Shoulder Straps (Blue) 6 Months Warranty"
                            price={11.96}
                            rating={3}
                            image="https://i0.wp.com/itportal.co.in/wp-content/uploads/2013/08/Laptop-bag3.jpg?fit=863%2C893&ssl=1"
                        />
                        <Product
                            id="234432"
                            title="Deslumbra con el iPhone 14 Pro de 128GB Morado, Cuenta con procesador Chip A16 Bionic con Dynamic Island, Pantalla OLED Super Retina XDR 6.1 pulgadas y sistema de cámara dual de 48 Mpx."
                            price={2400}
                            rating={4}
                            image="https://www.compraderas.com.bo/wp-content/uploads/2022/10/iPhone-14-Pro-128gb-morado.jpg"
                        />
                    </div>

                    <div className="home__row">
                        <Product
                            id="345543"
                            title="Now with fast WLAN. Apple has upgraded the MacBook Pro 14 and the new M2 Pro offers greater performance, and fast WLAN is finally supported."
                            price={3200}
                            rating={5}
                            image="https://www.notebookcheck.net/fileadmin/Notebooks/Apple/MacBook_Pro_14_2023_M2_Pro/AKA8518.jpg"
                        />
                        <Product
                            id="456654"
                            title="Ленинградский РОК-КЛУБ. Рубинштейна, 13. Рождение истории"
                            price={25}
                            rating={3}
                            image="https://bakubookcenter.az/get-product-image?fileId=71495&year=2023&month=05"
                        />
                        <Product
                            id="567765"
                            title="PS4 Sales Have Dropped Off Enormously Since PS5's Release"
                            price={330}
                            rating={4}
                            image="https://assetsio.reedpopcdn.com/Sony_USA_opens_the_official_store.jpg?width=1200&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
                        />
                    </div>

                    <div className="home__row">
                        <Product 
                        id="678876"
                        title="Zulay Magia Super Automatic Coffee Espresso Machine - Durable Automatic Espresso Machine With Grinder - Espresso Coffee Maker With Easy To Use 7” Touch Screen, 20 Coffee Recipes, 10 User Profiles"
                        price={170}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71msBeYfWpL._AC_UF894,1000_QL80_.jpg"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
