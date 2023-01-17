import React, {useEffect} from "react"
import firebase from "../Config/firebase"
import {useForm} from "react-hook-form"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { useParams } from "react-router-dom"
import { getByIdProductos, update } from "../Service/productosServices"


function ProductosModificar(){

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const {id} = useParams()

    useEffect(
        ()=>{
            const request = async ()=>{
            try{
                const response = await getByIdProductos(id)
                setValue("name", response.data().name)
                setValue("price", response.data().price)
                setValue("description", response.data().description)
                setValue("thumbnail", response.data().thumbnail);
                
                
            }catch(e){
                console.log(e)
            }    
        } 
        request()
            
        }, [id, setValue]
    )

    const onSubmit= async(data)=>{
        try{
            const document = await update(id, data)
        }catch(e){
            console.log(e)
        }
    }

    const handleDelete = async () => {
        const document = await firebase.db.doc("productos/"+id)
        .delete()
    }
      
    return(
        <>
            <Button type="submit" variant="danger" onClick={handleDelete}>Eliminar</Button>
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
                    <Form.Label>URL THumbnail</Form.Label>
                    <Form.Control type="text" {...register("thumbnail", {required: true})} />
                    {errors.thumbnail && <span>Amigo this field is required</span>}
                </Form.Group>
                
               
                <Button variant="primary" type="submit">Guardar</Button>{' '}
                
            </Form>
            
        </>
    )
}

export default ProductosModificar