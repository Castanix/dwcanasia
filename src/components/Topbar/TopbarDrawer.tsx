import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Drawer, Space } from "antd"
import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import CartDrawer from "./CartDrawer";

const TopbarDrawer = ({isOpen, setIsOpen, isMobile, children}: {isOpen: boolean, setIsOpen: Function, isMobile: boolean, children: ReactNode}) => {
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

    if(isMobile) {
        return (
            <Drawer 
                title={
                    <div style={{marginBlock: 'auto', textAlign: 'center'}}>
                        <Space size='large'>
                            <h2>Menu</h2>
                            <ShoppingCartOutlined title="Cart" className="topbar-toolbar-item" onClick={() => {setIsCartOpen(true)}} />
                            <Link to="/login" onClick={() => setIsOpen(false)}><UserOutlined title="Login" className="topbar-toolbar-item" /></Link>
                        </Space>
                    </div>
                    
                }
                open={isOpen}
                onClose={() => setIsOpen(false)}
            >
                <CartDrawer isOpen={isCartOpen} setIsOpen={setIsCartOpen} />

                {children}
            </Drawer>
        )
        
    }

    return (
        <CartDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
    )
    
};

export default TopbarDrawer