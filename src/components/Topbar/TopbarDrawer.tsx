import { LogoutOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Drawer, List, Space } from "antd"
import { useState } from "react";

const TopbarDrawer = ({isOpen, setIsOpen}: {isOpen: boolean, setIsOpen: Function}) => {
    return (
        <Drawer 
            title="Cart"
            open={isOpen}
            onClose={() => setIsOpen(false)}
        >
            <List>
                <List.Item>1</List.Item>
                <List.Item>2</List.Item>
                <List.Item>3</List.Item>
                <List.Item>4</List.Item>
                <List.Item>5</List.Item>
            </List>
        </Drawer>
    )
};

const TopbarDrawerMobile = ({isOpen, setIsOpen}: {isOpen: boolean, setIsOpen: Function}) => {
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

    return (
        <Drawer 
            title={
                <div style={{marginBlock: 'auto', textAlign: 'center'}}>
                    <Space size='large'>
                        <h2>Menu</h2>
                        <ShoppingCartOutlined title="Cart" className="topbar-toolbar-item" onClick={() => {setIsCartOpen(true)}} />
                        <LogoutOutlined title="Logout" className="topbar-toolbar-item" />
                    </Space>
                </div>
                
            }
            open={isOpen}
            onClose={() => setIsOpen(false)}
        >
            <Drawer
                title="Cart"
                open={isCartOpen}
                onClose={() => setIsCartOpen(false)}
            ></Drawer>
        </Drawer>
    )
}

export {
    TopbarDrawer,
    TopbarDrawerMobile
}