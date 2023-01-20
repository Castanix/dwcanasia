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
                    <Space size="middle" split={<Divider />}>
                        <Link to="">Home</Link>
                        <Link to="">Trade show</Link>
                        <Link to="">Contact us</Link>
                        <Link to="">Terms and conditions</Link>
                        <Link to="">About us</Link>
                    </Space>
                </div>
            </Footer>
        )
    }

    return null
    
}

export default WebFooter