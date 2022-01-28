import { useState } from "react";
import { useEffect } from "react";
import {url as endpoint} from '../helpers/url';

export const useFormulario = () => {

    const [datos, setDatos] = useState({
        username: '',
        email: '',
        password: ''
    })


    useEffect(() => {
        console.log("ComponenDidMount");
        return () => {
            console.log('ComponentUnmount');
        }
    }, [datos])

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleInputChange = ({ target }) => {
        setDatos({
            ...datos,
            [target.name]: target.value
        })
    }


    const  agregarDatos = async () => {
        
        let url = `${endpoint}Usuarios`
        console.log(`${endpoint}Usuarios`);
        console.log(datos);
        await fetch(url,{
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
               'Content-Type': 'application/json; charset=utf-8'
            }
        })
    }


    return {
        datos,
        useEffect,
        handleSubmit,
        handleInputChange,
        agregarDatos
    }


};