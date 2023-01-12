import { Header } from 'antd/es/layout/layout';
import React, { useContext, useState } from 'react';

import './Topbar.css';
import { EllipsisOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Input, Menu, MenuProps, Space, Typography } from 'antd';
import TopbarDrawer from './TopbarDrawer';
import { Link } from 'react-router-dom';
import { StoreContext } from '../Others/StoreContext';

const { Title } = Typography;

const items: MenuProps['items'] = [
    {
        label: 'Placeholder1',
        key: 'SubMenu1',
        children: [{
            label: 'SubPlaceholder1a',
            key: 'SubSubMenu1a'
        }, 
        {
            label: 'SubPlaceholder1b',
            key: 'SubSubMenu1b'
        }]
    },
    {
        label: 'Placeholder2',
        key: 'SubMenu2',
        children: [{
            label: 'SubPlaceholder2a',
            key: 'SubSubMenu2a'
        }, 
        {
            label: 'SubPlaceholder2b',
            key: 'SubSubMenu2b'
        }]
    },
    {
        label: 'Placeholder3',
        key: 'SubMenu3',
        children: [{
            label: 'SubPlaceholder3a',
            key: 'SubSubMenu3a'
        }, 
        {
            label: 'SubPlaceholder3b',
            key: 'SubSubMenu3b'
        }]
    },
    {
        label: 'Placeholder4',
        key: 'SubMenu4',
        children: [{
            label: 'SubPlaceholder4a',
            key: 'SubSubMenu4a'
        }, 
        {
            label: 'SubPlaceholder4b',
            key: 'SubSubMenu4b'
        }]
    },
    {
        label: 'Placeholder5',
        key: 'SubMenu5',
        children: [{
            label: 'SubPlaceholder5a',
            key: 'SubSubMenu5a'
        }, 
        {
            label: 'SubPlaceholder5b',
            key: 'SubSubMenu5b'
        }]
    },
    {
        label: 'Placeholder6',
        key: 'SubMenu6',
        children: [{
            label: 'SubPlaceholder6a',
            key: 'SubSubMenu6a'
        }, 
        {
            label: 'SubPlaceholder6b',
            key: 'SubSubMenu6b'
        },
        {
            label: 'SubPlaceholder6c',
            key: 'SubSubMenu6c'
        }]
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

    const { showComponents } = useContext(StoreContext);

    if(showComponents[0]) {
        return (
            <Header className="topbar-container">
                <div className="topbar topbar-flex-pc">
                    <Link to="/"><Title level={2} className="logo">D&W Canasia Trading Inc.</Title></Link>
                    <div className="topbar-flex-pc-small">
                        <Link to="/"><Title level={3} className="logo-small">D&W Canasia Trading Inc.</Title></Link>
                        <section className="topbar-nav" style={{ width: '60vw', maxWidth: '250rem' }}>
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
                            <Link to="/login"><UserOutlined title="Login" className="topbar-toolbar-item" /></Link>
                        </Space>
                    </section>
    
                    <TopbarDrawer isOpen={isCartOpen} setIsOpen={setIsCartOpen} isMobile={false}>
                    </ TopbarDrawer>
                </div>
    
    
                <div className="topbar topbar-flex-mobile">
                    <section className="topbar-nav-mobile" style={{ width: 'min(100rem, 60vw)' }}>
                        <Input 
                            prefix={<SearchOutlined style={{color: 'gray'}} />}
                            placeholder={'Search Item'}
                        />
                    </section>
                    <section className="topbar-toolbar-mobile">
                        <EllipsisOutlined title="Menu" className="topbar-toolbar-item" onClick={() => {setIsMenuOpen(true)}} />
                    </section>
    
                    <TopbarDrawer isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} isMobile={true}>
                        <Menu mode='vertical' items={items} />
                    </TopbarDrawer>
                </div>
            </Header>
        );
    }

    return null;
};

export default Topbar;

