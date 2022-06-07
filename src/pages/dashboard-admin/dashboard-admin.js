import React, {useEffect,useState} from 'react'
import ProtectedComponent from '../../layout/protected-component'
import {Table,Button} from 'react-bootstrap'
import { getAllProducts } from '../../services/api'
import ReactLoading from 'react-loading';


const DashboardAdmin = () => {

  const [dataProducts, setDataProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  const fetchAllProduct= async() => {
    await setIsLoading(true);
    await getAllProducts()
    .then(res => setDataProducts(res.data))
    .catch((error) => console.log(error));
    await setIsLoading(false);
  }
  useEffect(() => {
    fetchAllProduct();
  
    return () => {
     
    }
  }, [])
  
  return (
    <ProtectedComponent>
      <div>
      <h1> Dashboard Admin </h1>
      <div className="d-flex justify-content-end"> 
      <Button variant="primary" className="my-5">Add Product</Button> 
      </div>
      {isLoading ?(
        <ReactLoading type="spokes" color="grey" className="m-auto mt-5"/>):
        (
        <Table striped bordered hover>
  <thead>
    <tr>
  
      <th>Name</th>
      <th>Quantity</th>
      <th>Price</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {dataProducts.map(product => (
      <tr>
        
        <td>{product.name}</td>
        <td>{product.quantity}</td>
        <td>{product.price}</td>
        <td>
        <Button variant="secondary">Edited</Button> 
        <Button variant="dark" className="mx-2">Deleted</Button>


        </td>
      </tr>
    ))}
  </tbody>
</Table>
        )}
</div>
    </ProtectedComponent>
  )
}

export default DashboardAdmin