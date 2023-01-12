import React from "react";
import { Card, List } from "antd";

import "./CategoryGrid.css";


const CategoryGrid = () => {
    const categoryData = [
        "1", "2", "3", "4", "5",
        "10", "20", "30", "40", "50",
        "100", "200", "300", "400", "500",
        "1000", "2000", "3000", "4000", "5000",
    ]

    return (
        <div className="category-grid-container">
            <List
                grid={{
                    gutter: 16,
                    column: 5,
                    xs: 1,
                    sm: 2,
                    md: 2,
                    lg: 3,
                    xl: 3
                }}
                dataSource={categoryData}
                renderItem={(item) => (
                    <List.Item>
                        <Card 
                            title={`Cateogry ${item}`}
                        >
                            <img src="./images/200x200.png" alt=""></img>
                        </Card>
                    </List.Item>
                )}
            />         
        </div>
    )
}

export default CategoryGrid