import React, {useEffect,useState} from 'react';
import{useParams} from "react-router-dom";
import { getProductById } from '../../services/api';
import {Container, Row, Col} from "react-bootstrap"
import ReactLoading from 'react-loading';
import FigureComponent from '../../components/figure/figure';



const DetailProduct = () => {

  const [dataProducts, setDataProducts] = useState({})
  const [isLoading,setIsLoading] = useState(false)
  const {id} = useParams()

  const fetcProductById = async () => {
  await setIsLoading(true)
  await getProductById(id)
  .then((res) => 
    setDataProducts(res.data))
    .catch((error) => console.log(error));
    await setIsLoading(false)
  };

  useEffect(() => {
    fetcProductById();
  return () => {
    
  }
}, [])

return (
  <div>
  {isLoading ?(
  <ReactLoading 
      type="spokes" 
      color="grey" 
      className="m-auto mt-5"/>
      ):(
          <Container className="mt-5">
          
              <Row>
                <Col md="4">
                <FigureComponent dataProducts ={dataProducts}/>
                </Col>
                <Col md="8">
                <p>Price :  Rp. {dataProducts.price}</p>
                <p>Quantity :  {dataProducts.quantity}</p>
                </Col>
              </Row>
              
          </Container>
    )}
 </div>
  )
};

export default DetailProduct