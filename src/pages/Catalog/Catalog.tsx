import { useContext, useEffect } from "react";
import { StoreContext } from "../../components/Others/StoreContext";
import { Menu, MenuProps } from "antd";

import "./Catalog.css";
import CatalogGrid from "../../components/CatalogGrid/CatalogGrid";


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

const Catalog = () => {
    const { showComponents } = useContext(StoreContext)

    useEffect(() => {
        showComponents[1](true);
    });

    return (
        <section className="catalog-page">
            <section className="catalog-menu-container">
                <div className="catalog-menu-pc">
                    <Menu
                        mode="inline"
                        items={items}
                        className="catalog-menu"
                        // style={{position: 'relative', top: '2rem', maxWidth: '24rem', border: '1px solid black'}}
                    />
                </div>
                <div className="catalog-menu-mobile">
                    <Menu
                        mode="horizontal"
                        items={items}
                        className="catalog-menu"
                        // style={{position: 'relative', top: '2rem', maxWidth: '24rem', border: '1px solid black'}}
                    />        
                </div>
            </section>
            <CatalogGrid />
        </section>
    )
}

export default Catalog