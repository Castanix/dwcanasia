import { Header } from 'antd/es/layout/layout';
import React, { useState } from 'react';

import './Topbar.css';
import { EllipsisOutlined, LogoutOutlined, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Input, Menu, MenuProps, Space, Typography } from 'antd';
import { TopbarDrawer, TopbarDrawerMobile } from './TopbarDrawer';

const { Title } = Typography;

const items: MenuProps['items'] = [
    {
        label: 'Placeholder1',
        key: 'SubMenu1',
    },
    {
        label: 'Placeholder2',
        key: 'SubMenu2',
    },
    {
        label: 'Placeholder3',
        key: 'SubMenu3',
    },
    {
        label: 'Placeholder4',
        key: 'SubMenu4',
    },
    {
        label: 'Placeholder5',
        key: 'SubMenu5',
    },
    {
        label: 'Placeholder6',
        key: 'SubMenu6',
    },
    {
        label: 'Placeholder7',
        key: 'SubMenu7',
    },
    {
        label: 'Placeholder8',
        key: 'SubMenu8',
    },
    {
        label: 'Placeholder9',
        key: 'SubMenu9',
    },
    {
        label: 'Placeholder10',
        key: 'SubMenu10',
    }
]

const Topbar = () => {
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <Header className="topbar-container">
            <div className="topbar-flex-pc">
                <Title level={2} className="logo">D&W Canasia Trading Inc.</Title>
                <div className="topbar-flex-pc-small">
                    <Title level={3} className="logo-small">D&W Canasia Trading Inc.</Title>
                    <section className="topbar-nav" style={{ width: 'min(100rem, 60vw)' }}>
                        <Input 
                            prefix={<SearchOutlined style={{color: 'gray'}} />}
                            placeholder={'Search Item'} 
                        />
                        <div><Menu mode='horizontal' items={items} /></div>
                    </section>
                </div>
                <section className="topbar-toolbar">
                    <Space size='large'>
                        <ShoppingCartOutlined title="Cart" className="topbar-toolbar-item" onClick={() => {setIsCartOpen(true)}} />
                        <LogoutOutlined title="Logout" className="topbar-toolbar-item" />
                    </Space>
                </section>

                <TopbarDrawer isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
            </div>


            <div className="topbar-flex-mobile">
                <section className="topbar-nav-mobile" style={{ width: 'min(100rem, 60vw)' }}>
                    <Input 
                        prefix={<SearchOutlined style={{color: 'gray'}} />}
                        placeholder={'Search Item'}
                    />
                </section>
                <section className="topbar-toolbar-mobile">
                    <EllipsisOutlined title="Menu" className="topbar-toolbar-item" onClick={() => {setIsMenuOpen(true)}} />
                </section>

                <TopbarDrawerMobile isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
            </div>
        </Header>
    );
};

export default Topbar;

