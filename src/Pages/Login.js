import React, {useState, useContext} from "react"
import firebase from "../Config/firebase"
import {useForm} from "react-hook-form"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import AlertCustom from "../Components/AlertCustom";
import { loginMessage } from "../Utils/errorMessage";
import AuthContext from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login(){

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [alert, setAlert] = useState({variant: "", text:""})
    const context = useContext(AuthContext )
    const navigate = useNavigate()

    const onSubmit= async(data)=>{
        
        try{
            const responseUser = await firebase.auth.signInWithEmailAndPassword(data.email, data.password)
            if(responseUser.user.uid){
                const userInfo = await firebase.db.collection("usuarios")
                .where("userId", "==", responseUser.user.uid )
                .get()
                if(userInfo){
                    const nombre = userInfo.docs[0].data().name
                    setAlert({variant: "success", text:"Bienvenido " + nombre})
                    context.loginUser(userInfo.docs[0].data())
                    navigate("/")
                }
                
            }
                
            
        }catch(e){
            console.log(e)
            setAlert({variant:"danger", text:loginMessage[e.code]})
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
               
                <Button variant="secondary" type="submit">Ingresar </Button>{' '}
                <AlertCustom {...alert} />
                
                
            </Form>
            
        </>
    )
}

export default Login