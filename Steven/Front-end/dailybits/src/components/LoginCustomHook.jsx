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
        console.log(datos.email,usuarios[0].email )
        let usuarioVal = usuarios.find(user => user.email === datos.email)
        console.log(usuarioVal.password)
        if (usuarioVal) {
            if (usuarioVal.password == datos.password) {
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