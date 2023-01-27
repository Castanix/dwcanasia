import { Card, List } from "antd";

import "./TermsAndConditions.css";


const TermsAndConditions = () => {
    const { Item } = List;

    return (
        <section className="page terms-page">
            <Card title="Terms and Conditions">
                <List>
                    <Item>All prices are based on F.O.B. our warehouse.</Item>
                    <Item>All prices are subject to change without notice.</Item>
                    <Item>All items are subject to availability.</Item>
                    <Item>We reserve the rights to change item's numbers without notifying customers.</Item>
                    <Item>All items appear in catalogue may be slightly different than actual products.</Item>
                    <Item>We accept visa, master card, and e-transfer.</Item>
                </List>

                <h2>Claims</h2>
                <List>
                    <Item>Shipments receive by customers are deemed satisfactory, unless we are notified within 7 business days based on receipt of goods.</Item>
                    <Item>All returns must be approved prior shipping and freight must be prepaid by customers.</Item>
                </List>

                <h2>Clearance</h2>
                <List>
                    <Item>
                        Offers are not valid for previous purchases and may not be combined with any other promotions, discounts or all owances. 
                        Taxes and shipping costs are not included.
                    </Item>
                </List>
            </Card>
        </section>
    );
};

export default TermsAndConditions