import React from 'react'
import { Form, Button } from 'react-bootstrap'
import {useFormulario} from './FormularioCustomHook'
import { useNavigate} from "react-router-dom";




const Formulario = () => {
    const { datos, handleSubmit, handleInputChange , agregarDatos } = useFormulario()
    let Navigate = useNavigate();

    const HandleLogin = () => {

            
            Navigate('/Login', {
                replace: true
            })
    }


    return (
        <div>
            <h1>Formulario</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formulario">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su nombre" value={datos.username} onChange={handleInputChange} name="username" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formulario">
                    <Form.Label>Correo electronico</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese su email" value={datos.email} onChange={handleInputChange} name="email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formulario">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Ingrese su contraseña" value={datos.password} onChange={handleInputChange} name="password" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={agregarDatos}>
                    Enviar
                </Button>
            </Form>
        </div>
    )
}

export default Formulario
