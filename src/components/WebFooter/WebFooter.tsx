import { Footer } from "antd/es/layout/layout";
import "./WebFooter.css";
import { useContext } from "react";
import { StoreContext } from '../Others/StoreContext';
import { Space, Divider } from "antd";
import { Link } from "react-router-dom";

const WebFooter = () => {

    const { showComponents } = useContext(StoreContext);

    if(showComponents[0]) {
        return (
            <Footer className="footer-container">
                <div className="footer-background">
                    <div className="footer-pc">
                        <Space size="middle" split={<Divider />}>
                            <Link to="/">Home</Link>
                            <Link to="/trade-show">Trade show</Link>
                            <Link to="/contact">Contact us</Link>
                            <Link to="/terms">Terms and conditions</Link>
                            <Link to="/about">About us</Link>
                        </Space>
                    </div>

                    <div className="footer-mobile">
                        <Link to="/">Home</Link>
                        <Link to="/trade-show">Trade show</Link>
                        <Link to="/contact">Contact us</Link>
                        <Link to="/terms">Terms and conditions</Link>
                        <Link to="/about">About us</Link>
                    </div>
                </div>
            </Footer>
        )
    }

    return null
    
}

export default WebFooter