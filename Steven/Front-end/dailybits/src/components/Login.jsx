import React from 'react'
import { Form, Button } from 'react-bootstrap'
import {useLogin} from './LoginCustomHook'
import { useNavigate} from "react-router-dom";

const Login = () => {

  const { datos, handleSubmit, handleInputChange, verifyUser } = useLogin()
  let Navigate = useNavigate();

  const HandleLogin = async () => {
      let validate = await verifyUser()
      console.log(validate)
    if (validate) {
        Navigate('/', {
            replace: true
        })
    }
  }

  return (
    <div>
    <h1>Login</h1>
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formulario">
            <Form.Label>Correo electronico</Form.Label>
            <Form.Control type="email" placeholder="Ingrese su email" value={datos.email} onChange={handleInputChange} name="email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formulario">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Ingrese su contraseña" value={datos.password} onChange={handleInputChange} name="password" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={HandleLogin}>
            Enviar
        </Button>
    </Form>
</div>
  );
};

export default Login;
