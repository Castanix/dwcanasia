import { Footer } from "antd/es/layout/layout";
import "./WebFooter.css";
import { useContext } from "react";
import { StoreContext } from '../Others/StoreContext';

const WebFooter = () => {

    const { showComponents } = useContext(StoreContext);

    if(showComponents[0]) {
        return (
            <Footer className="footer-container">
                <div className="footer-background">
                </div>
            </Footer>
        )
    }

    return null
    
}

export default WebFooter