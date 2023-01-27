import { Button, InputNumber } from "antd";
import ProductShowcase from "../../components/ProductShowcase/ProductShowcase"

import "./Product.css";

const Product = () => {
    return (
        <section className="page product-page">
            <section className="product-main-flex-container">
                <ProductShowcase />
                <section className="product-info-container">
                    <h2>Name of Product - Variant 1</h2>
                    <hr />
                    <p>
                        Description of Product - 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                        culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <hr />
                    {/* Add variant component */}
                </section>
                <section className="product-cart-container">
                    <div>
                        <label style={{verticalAlign: "middle"}}>Quantity: </label>
                        <InputNumber min={0} defaultValue={0}></InputNumber>
                    </div>
                    <Button type="primary" style={{width: "10rem", marginTop: "1rem"}}>Add to Cart</Button>
                </section>
            </section>
            {/* Perhaps a 'similar' products component here */}
        </section>
    )
}

export default Product