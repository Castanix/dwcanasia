import { Card, List } from "antd";
import React, { useState } from "react";

import "./TradeShow.css";


const TradeShow = () => {
    const [activeTab, setActiveTab] = useState<string>('tab1');

    const { Item } = List;

    const tabList = [
        {
            key: 'tab1',
            tab: 'MODE SHOW - Toronto'
        },
        {
            key: 'tab2',
            tab: 'Vancouver Gift Expo'
        },
        {
            key: 'tab3',
            tab: 'Calgary Gift Expo'
        }
    ];

    const contentList: Record<string, React.ReactNode> = {
        tab1: <>
            <h2>MODE SHOW - Toronto</h2>
            <ul>
                <Item>January 29-31, 2023</Item>
                <Item>Booth # 1121</Item>
                <Item>Toronto International Centre</Item>
                <Item>Show Website: <a href="https://www.modeshow.ca/">www.modeshow.ca</a></Item>
            </ul>
        </>,

        tab2: <>
            <h2>Vancouver Gift Expo</h2>
            <ul>
                <Item>TBA</Item>
                <Item>Booth # 602-605</Item>
                <Item>PNE Forum Building (2901 East Hastings St.)</Item>
                <Item>Show Website: <a href="https://www.giftexpo.ca/">www.giftexpo.ca</a></Item>
            </ul>
        </>,

        tab3: <>
            <h2>Calgary Gift Expo</h2>
            <ul>
                <Item>TBA</Item>
                <Item>Booth # 406</Item>
                <Item>BMO Center, Stampede Grounds</Item>
                <Item>Show Website: <a href="https://www.giftexpo.ca/">www.giftexpo.ca</a></Item>
            </ul>
        </>
    }

    return (
        <section className="page tradeshow-page">
            <Card 
                title="Trade Show" 
                tabList={tabList}
                activeTabKey={activeTab}
                onTabChange={(key) => setActiveTab(key)}
            >
                <List className="">
                    {contentList[activeTab]}
                </List>
            </Card>
        </section>
    );
};

export default TradeShow;