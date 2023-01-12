import { CloseOutlined } from "@ant-design/icons"
import { Drawer, List, InputNumber, Button } from "antd"
import { useContext, useState } from "react";
import { StoreContext } from "../Others/StoreContext";

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
            <Button 
                type="primary" 
                style={{backgroundColor: "red"}}
                disabled={cart[0].length > 0 ? false : true}>Checkout Cart</Button>
        </Drawer>
    )
};

export default CartDrawer;