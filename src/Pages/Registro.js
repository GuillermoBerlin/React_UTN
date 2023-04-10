import React, {useState} from "react"
import firebase from "../Config/firebase"
import {useForm} from "react-hook-form"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

function Registro(){
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit= async(data)=>{
    try{
      const responseUser = await firebase.auth.createUserWithEmailAndPassword(data.email, data.password)
      console.log("responseUser", responseUser) 
      if(responseUser.user.uid){
        const document = await firebase.db.collection("usuarios")
        .add({
          name: data.nombre,
          lastname: data.apellido,
          userId: responseUser.user.uid
        })
        console.log("document", document)
        
        const cartsRef = firebase.db.collection("carts");
        const cartId = cartsRef.doc().id;
        await cartsRef.doc(cartId).set({
          userId: responseUser.user.uid,
          total: 0,
          items: []
        });
      } 
    }catch(e){
      console.log(e)
    }
  }

  return(
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" {...register("nombre", {required: true})} />
          {errors.nombre && <span>Amigo this field is required</span>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" {...register("apellido", {required: true})} />
          {errors.apellido && <span>Amigo this field is required</span>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" {...register("email", {required: true})} />
          {errors.email && <span>Amigo this field is required</span>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" {...register("password", {required: true})} />
          {errors.contraseña && <span>Amigo this field is required</span>}
        </Form.Group>
        <Button variant="secondary" type="submit">Registrarme</Button>{' '}
      </Form>
    </>
  )
}

export default Registro
