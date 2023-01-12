import { Button, Card } from "antd";
import "./Authentication.css";
import { useContext, useEffect } from "react";
import { StoreContext } from "../../components/Others/StoreContext";
import { Link } from "react-router-dom";
import Login from "./Login";
import { Register } from "./Register";


const Authentication = ({state}: {state: String}) => {
    const { showComponents } = useContext(StoreContext)

    useEffect(() => {
        showComponents[1](false);
    });

    return (
        <section className="authentication-page">
            <Card 
                title={<Link to={state === "login" ? "/" : "/login"}><Button>Back</Button></Link>} 
                bordered={false}
            >
                <div className="authentication-container">
                    <section className="login-img-container" style={state === "register" ? {display: "none"} : {}}>
                        <img src="./images/login.jpg" alt=""></img>
                    </section>
                    <section className="authentication-form-container" style={state === "register" ? {borderRadius: "0.9rem"} : {}}>
                        <h1>D&W Canasia Trading Inc.</h1>
                        {state === "login" ? <Login /> : <Register />}
                    </section>
                </div>
            </Card>
        </section>
    )
}

export default Authentication