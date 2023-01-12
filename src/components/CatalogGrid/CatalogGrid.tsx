import { Card, List } from "antd"
import { PaginationConfig } from "antd/es/pagination"

import "./CatalogGrid.css";
import { Link } from "react-router-dom";

const paginationConfig: PaginationConfig = {
    defaultCurrent: 1,
    pageSize: 30
}

const CatalogGrid = () => {
    return (
        <section className="catalog-grid-container">
            <h2>Catalog Name - Catalog Section</h2>
            <List
                grid={{
                    column: 5,
                    xs: 1,
                    sm: 1,
                    md: 2,
                    lg: 3,
                    xl: 3
                }}
                dataSource={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]}
                renderItem={(item) => (
                    <List.Item>
                        <Link to="/product">
                            <Card>
                                <img src="/images/100x200.png" alt="" />
                                <h3>{`Product Name ${item}`}</h3>
                                <h4>{`$${item}0`}</h4>
                            </Card>
                        </Link>
                    </List.Item>
                )}
                pagination={paginationConfig}
            />
        </section>
    )
}

export default CatalogGrid