import React, {useState} from "react"
import firebase from "../Config/firebase"
import {useForm} from "react-hook-form"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'


function Login(){

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit= async(data)=>{
        
        try{
            const responseUser = await firebase.auth.signInWithEmailAndPassword(data.email, data.password)
            console.log("responseUser", responseUser)
        }catch(e){
            console.log(e)
        }
        
    }
   
    return(
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" {...register("email", {required: true})} />
                    {errors.email && <span>Amigo this field is required</span>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" {...register("password", {required: true})} />
                    {errors.contraseña && <span>Amigo this field is required</span>}
                </Form.Group>
               
                <Button variant="primary" type="submit">Ingresar</Button>{' '}
                
            </Form>
            
        </>
    )
}

export default Login