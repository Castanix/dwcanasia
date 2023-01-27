import { List } from "antd"
import { ICart, StoreContext } from "../../components/Others/StoreContext"
import { useContext } from "react";

import "./Checkout.css";

const Checkout = () => {
    const { cart } = useContext(StoreContext);

    return (
        <section className="page checkout-page">
            <section className="checkout-cart-container">
                <List
                    header={<div>Cart</div>}
                    bordered
                    dataSource={Object.entries(cart[0] as ICart)}
                    renderItem={([name, quantity]) => (
                        <List.Item>
                            {name}
                            {quantity}
                        </List.Item>
                    )}
                />
            </section>
            <section className="checkout-payment-container">
            
            </section>
        </section>
    )
}

export default Checkout