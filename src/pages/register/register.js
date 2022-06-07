import React, {useState} from 'react'
import { Form, Button} from 'react-bootstrap'
import { register } from '../../services/api'

const Register = () => {

  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [phone_number, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("")


  const submitRegister = async (e) => {
    e.preventDefault();
    await register(name, address, phone_number, password)
    .then((res) => console.log(res.data))
    .catch((error)=> console.log(error));
  };

  return (

   <div>

     <h1> Register </h1>
     
    <Form onSubmit={submitRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter Name" 
              onChange={(e) => 
              setName(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Address</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter Address" 
               onChange={(e) => 
              setAddress(e.target.value)}
              require = {true}
              />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter Phone Number" 
            onChange={(e) => 
              setPhoneNumber(e.target.value)}
              require = {true}
              />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
             <Form.Label>Password</Form.Label>
             <Form.Control 
              type="password" 
              placeholder="Password"
              onChange={(e) => 
              setPassword(e.target.value)} 
              require = {true}
              />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
    </Form>
</div>
  )
}

export default Register
