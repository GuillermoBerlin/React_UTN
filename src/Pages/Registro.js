import React, {useState} from "react"
import Input from "../Components/Input"
import {useForm} from "react-hook-form"

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
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Nombre</label>
                    <input type="text" {...register("nombre", {required: true})} />
                    {errors.nombre && <span>Amigo this field is required</span>}
                </div>
                <div>
                    <label>Apellido</label>
                    <input type="text" {...register("apellido")} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" {...register("email")} />
                </div>
                <div>
                    <label>Contraseña</label>
                    <input type="password" {...register("password")} />
                </div>
                <button type="submit ">Registrarme</button>
            </form>
        </>
    )
}

export default Registro