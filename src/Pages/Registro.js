import React, {useState} from "react"
import Input from "../Components/Input"

function Registro(){

    const [form, setForm] = useState({nombre:"",apellido:"", email:"", password:""})

    const handleChange=(event)=>{
        const name = event.target.name
        const value = event.target.value
        setForm({...form, [name]:value})
        
    }

        const handleSubmit=(event)=>{
            console.log(form)
            event.preventDefault()
        }
   
    return(
        <>
            <form onSubmit={handleSubmit}>
                <Input label="nombre" name="nombre" change={handleChange} />
                <Input label="apellido" name="apellido" change={handleChange} />
                <Input label="email" name="email" change={handleChange} type="email"/>
                <Input label="contraseña" name="password" change={handleChange} type="password"/>
                <button type="submit">Registrarme</button>
            </form>
        </>
    )
}

export default Registro