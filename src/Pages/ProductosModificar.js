import React, {useEffect} from "react"
import firebase from "../Config/firebase"
import {useForm} from "react-hook-form"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { useParams } from "react-router-dom"
import { getByIdProductos, update } from "../Service/productosServices"
import { useNavigate } from "react-router-dom";


function ProductosModificar(){

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const {id} = useParams()
    const navigate = useNavigate()
    
    useEffect(
        ()=>{
            const request = async ()=>{
            
            try{
                const response = await getByIdProductos(id)
                setValue("name", response.data().name)
                setValue("price", response.data().price)
                setValue("description", response.data().description)
                setValue("descriptionLong", response.data().descriptionLong)
                setValue("thumbnail", response.data().thumbnail)
                setValue("thumbnail2", response.data().thumbnail2)
                               
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
        navigate("/")
    }
      
    return(
        <> 
            <Form onSubmit={handleSubmit(onSubmit)}>
                
                <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" {...register("name", {required: true})} />
                    {errors.name && <span>Amigo this field is required</span>}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="text" {...register("price", {required: true})} />
                    {errors.apellido && <span>Amigo this field is required</span>}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control type="text" {...register("description", {required: true})} />
                    {errors.email && <span>Amigo this field is required</span>}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Descripcion larga</Form.Label>
                    <Form.Control type="text" {...register("descriptionLong", {required: true})} />
                    {errors.email && <span>Amigo this field is required</span>}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>URL THumbnail</Form.Label>
                    <Form.Control type="text" {...register("thumbnail", {required: true})} />
                    {errors.thumbnail && <span>Amigo this field is required</span>}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>URL THumbnail 2</Form.Label>
                    <Form.Control type="text" {...register("thumbnail2", {required: true})} />
                    {errors.thumbnail2 && <span>Amigo this field is required</span>}
                </Form.Group>
       
                <Button variant="primary" type="submit">Guardar</Button>{' '}
                <Button type="submit" variant="danger" onClick={handleDelete}>Eliminar</Button>
            </Form>         
        </>
    )
}

export default ProductosModificar