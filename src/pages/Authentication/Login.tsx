import { Form, Input, Button, Typography } from "antd"
import { Link } from "react-router-dom"

const { Title } = Typography;
const { Item } = Form;

const Login = () => {
    return (
        <>
            <Title style={{color: "white"}}>Login</Title>
            <Form 
                name="login"
                size="middle"
                className="login-form"
            >
                
                <Item label={<div className="form-label">Email: </div>}>
                    <Input placeholder="Enter Email"></Input>
                </Item>
                <Item label={<div className="form-label">Password: </div>}>
                    <Input placeholder="Enter Password"></Input>
                </Item>
                <Button type="primary">Login</Button>
                <Link to="/register"><Button className="form-register-link" type="link"><u>Don't have an account? Register with us!</u></Button></Link>
            </Form>
        </>
    )
}

export default Login