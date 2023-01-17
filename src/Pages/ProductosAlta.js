import React, {useState} from "react"
import firebase from "../Config/firebase"
import {useForm} from "react-hook-form"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'


function ProductosAlta(){

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit= async(data)=>{
        
        try{
            const document = await firebase.firestore().collection("productos")
            .add({
                name:data.name,
                price:data.price,
                description:data.description,
                thumbnail: data.thumbnail,
            }) 
            console.log("document",document)
        }catch(e){
            console.log(e)
        }
        
    }
   
    return(
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" {...register("name", {required: true})} />
                    {errors.name && <span>Amigo this field is required</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="text" {...register("price", {required: true})} />
                    {errors.apellido && <span>Amigo this field is required</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control type="text" {...register("description", {required: true})} />
                    {errors.email && <span>Amigo this field is required</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>URL Thumbnail</Form.Label>
                    <Form.Control type="text" {...register("thumbnail", {required: true})} />
                    {errors.thumbnail && <span>Amigo this field is required</span>}
                </Form.Group>
                
               
                <Button variant="primary" type="submit">Guardar</Button>{' '}
                
            </Form>
            
        </>
    )
}

export default ProductosAlta