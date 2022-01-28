import { useState } from "react";
import { useEffect } from "react";
import {url as endpoint} from '../helpers/url';
import axios from 'axios';

export const useLogin = () => {

    const [datos, setDatos] = useState({
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
        verifyUser(datos)
    }

    const handleInputChange = ({ target }) => {
        setDatos({
            ...datos,
            [target.name]: target.value
        })
    }



    const getData = async () => {
        let data = await axios.get(`${endpoint}Usuarios`)
        return data.data      
   }


    const  verifyUser = async () => {
        let usuarios =  await getData()
        console.log(usuarios)
        let usuarioVal = usuarios.find(user => user.email === datos.email)
        if (usuarioVal) {
            console.log(usuarioVal.password)
            if (usuarioVal.password == datos.password) {
                sessionStorage.setItem("user",JSON.stringify(datos));
                
                return true


            }
            else {
                return false
            }
            
        } else {
            return false       
        }

        
    }
    
    return {
        datos,
        useEffect,
        handleSubmit,
        handleInputChange,
        verifyUser
    }


};