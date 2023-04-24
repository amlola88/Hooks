import { useState } from "react"
import Header from "../helpers/Header"

const usuarios = () => {

    const [nombre, setNombre] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

  return (
    <section> 
        <Header/>
        <form action="">
            <input value={nombre} onChange={(e)=>setNombre(e.target.value)} type="text"/> 
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password"/> 
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email"/> 
            <input type="button"/> 
        </form>
        <table>
            <thead>
                <tr>
                    <td>Nombre</td>
                    <td>Contraseña</td>
                    <td>Correo</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{nombre}</td>
                    <td>{password}</td>
                    <td>{email}</td>
                </tr>
            </tbody>
        </table>
    </section>
  )
}

export default usuarios