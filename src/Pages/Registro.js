import React, {useState} from "react"
import Input from "../Components/Input"
import {useForm} from "react-hook-form"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

function Registro(){

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const handleChange=(event)=>{
        const name = event.target.name
        const value = event.target.value
    }
   
        const onSubmit=(data)=>{
            console.log(data)
        }
   
    return(
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" {...register("nombre", {required: true})} />
                    {errors.nombre && <span>Amigo this field is required</span>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" {...register("apellido", {required: true})} />
                    {errors.apellido && <span>Amigo this field is required</span>}
                </Form.Group>
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
               
                <Button variant="primary" type="submit">Registrarme</Button>{' '}
                
            </Form>
            
        </>
    )
}

export default Registro