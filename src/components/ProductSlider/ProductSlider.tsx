import { Button, Tabs } from "antd";
import { useContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "./ProductSlider.css";
import { StoreContext, AddToCart } from "../Others/StoreContext";

const TabContents = (tab: string, cart: any) => {
    if (tab === "best") {
        return (
            <div className="tab-content">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    breakpoints={{
                        400: { slidesPerView: 2 },
                        640: { slidesPerView: 3 },
                        1280: { slidesPerView: 5 }
                    }}
                    className="best-swiper swiper-product-slider"
                >
                    <SwiperSlide>
                        <div className="item-product">
                            <img src="./images/200x200.png" alt=""></img>
                            <h3>Item 1</h3>
                            <Button onClick={() => AddToCart("test1", cart)}>Add to cart</Button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item-product">
                            <img src="./images/200x200.png" alt=""></img>
                            <h3>Item 2</h3>
                            <Button onClick={() => AddToCart("test2", cart)}>Add to cart</Button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item-product">
                            <img src="./images/200x200.png" alt=""></img>
                            <h3>Item 3</h3>
                            <Button onClick={() => AddToCart("test3", cart)}>Add to cart</Button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item-product">
                            <img src="./images/200x200.png" alt=""></img>
                            <h3>Item 4</h3>
                            <Button onClick={() => AddToCart("test4", cart)}>Add to cart</Button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item-product">
                            <img src="./images/200x200.png" alt=""></img>
                            <h3>Item 5</h3>
                            <Button onClick={() => AddToCart("test5", cart)}>Add to cart</Button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item-product">
                            <img src="./images/200x200.png" alt=""></img>
                            <h3>Item 6</h3>
                            <Button onClick={() => AddToCart("test6", cart)}>Add to cart</Button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item-product">
                            <img src="./images/200x200.png" alt=""></img>
                            <h3>Item 7</h3>
                            <Button onClick={() => AddToCart("test7", cart)}>Add to cart</Button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item-product">
                            <img src="./images/200x200.png" alt=""></img>
                            <h3>Item 8</h3>
                            <Button onClick={() => AddToCart("test8", cart)}>Add to cart</Button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item-product">
                            <img src="./images/200x200.png" alt=""></img>
                            <h3>Item 9</h3>
                            <Button onClick={() => AddToCart("test9", cart)}>Add to cart</Button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item-product">
                            <img src="./images/200x200.png" alt=""></img>
                            <h3>Item 10</h3>
                            <Button onClick={() => AddToCart("test10", cart)}>Add to cart</Button>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        )
    } else if (tab === "new") {
        return (
            <div className="tab-content">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    breakpoints={{
                        400: { slidesPerView: 2 },
                        640: { slidesPerView: 3 },
                        1280: { slidesPerView: 5 }
                    }}
                    className="new-swiper swiper-product-slider"
                >
                    <SwiperSlide>
                        <div className="item-product">
                            <img src="./images/200x200.png" alt=""></img>
                            <h3>Item 10</h3>
                            <Button>Add to cart</Button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item-product">
                            <img src="./images/200x200.png" alt=""></img>
                            <h3>Item 20</h3>
                            <Button>Add to cart</Button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item-product">
                            <img src="./images/200x200.png" alt=""></img>
                            <h3>Item 30</h3>
                            <Button>Add to cart</Button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item-product">
                            <img src="./images/200x200.png" alt=""></img>
                            <h3>Item 40</h3>
                            <Button>Add to cart</Button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item-product">
                            <img src="./images/200x200.png" alt=""></img>
                            <h3>Item 50</h3>
                            <Button>Add to cart</Button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item-product">
                            <img src="./images/200x200.png" alt=""></img>
                            <h3>Item 60</h3>
                            <Button>Add to cart</Button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item-product">
                            <img src="./images/200x200.png" alt=""></img>
                            <h3>Item 70</h3>
                            <Button>Add to cart</Button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item-product">
                            <img src="./images/200x200.png" alt=""></img>
                            <h3>Item 80</h3>
                            <Button>Add to cart</Button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item-product">
                            <img src="./images/200x200.png" alt=""></img>
                            <h3>Item 90</h3>
                            <Button>Add to cart</Button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item-product">
                            <img src="./images/200x200.png" alt=""></img>
                            <h3>Item 100</h3>
                            <Button>Add to cart</Button>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>  
        )
    }
    
    return null;
}


const ProductSlider = () => {
    const { cart } = useContext(StoreContext);
    const [tab, setTab] = useState<string>('best');

    const tabList = [
        {
            label: 'Best Sellers',
            key: 'best',
            children: TabContents("best", cart)
        },
        {
            label: 'New Products',
            key: 'new',
            children: TabContents("new", cart)
        }
    ]

    return (
        <section className="product-slider-container">
            <Tabs
                type="card"
                items={tabList}
                activeKey={tab}
                onChange={(key) => {
                    setTab(key);
                }}
                tabBarGutter={4}
                centered
            />
        </section>
    )
}

export default ProductSlider