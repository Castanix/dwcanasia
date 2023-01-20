import { CloseOutlined } from "@ant-design/icons"
import { Drawer, List, InputNumber, Button } from "antd"
import { useContext, useState } from "react";
import { StoreContext } from "../Others/StoreContext";
import { Link } from "react-router-dom";

const CartDrawer = ({isOpen, setIsOpen}: {isOpen: boolean, setIsOpen: Function}) => {
    const { cart } = useContext(StoreContext);
    const [ cartValue, cartFunction ] = cart;
    const [ rerender, setRerender ] = useState<boolean>(false);

    const deleteCartItem = (name: string) => {
        const newCartValue = cartValue;
        delete newCartValue[name];
        cartFunction(newCartValue);
        setRerender(!rerender);
    }

    return (
        <Drawer 
            title="Cart"
            open={isOpen}
            onClose={() => setIsOpen(false)}
        >
            <List
                dataSource={Object.entries(cartValue)}
                renderItem={([name, quantity]) => (
                    <List.Item>
                        <div>{name}</div>
                        <InputNumber 
                            style={{width: 100}} 
                            value={quantity as number | null} 
                            min={1} 
                            onChange={(value) => cartFunction({...cartValue, [name]: value})} 
                        />
                        <CloseOutlined className="delete-btn" onClick={() => deleteCartItem(name)}/>
                    </List.Item>
                )}
            />
            <Link to="/checkout">
                <Button 
                    type="primary" 
                    style={{backgroundColor: "red"}}
                    disabled={Object.keys(cartValue).length > 0 ? false : true}
                >
                    Checkout Cart
                </Button>
            </Link>  
        </Drawer>
    )
};

export default CartDrawer;