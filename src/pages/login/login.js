import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import { login } from "../../services/api"
import Cookies from 'js-cookie'
import {useNavigate} from 'react-router-dom'


const Login = () => {

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const navigate= useNavigate()

  const submitLogin = async (e) =>{
    e.preventDefault();
    await login(name,password)
          .then((res) => {
            Cookies.set('token', res.data.access_token)
            navigate('/dashboard-admin')
          })
          .catch((error)=> console.log(error))
  };

  return (
  <Form onSubmit = {submitLogin}>
  <Form.Group className="mb-3" controlId="fromBasicTExt">
    <Form.Label>User Name </Form.Label>
    <Form.Control 
            type="text" 
            placeholder="Enter Name" 
            value= {name}
            onChange={(e) => setName(e.target.value)}
            require = {true}
            />
            
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control 
        type="password" 
        placeholder="Password" 
        value = {password}
        onChange={(e) => setPassword(e.target.value)}
        require = {true}/>
  </Form.Group>

  <Button variant="primary" type="submit">
   Login
  </Button>
 

</Form>
  )
}

export default Login