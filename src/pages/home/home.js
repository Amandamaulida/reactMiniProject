import React,{ useEffect, useState} from 'react';
import { getAllProducts } from "../../services/api";
import  CardComponent from "../../components/card/card-component";
import {Link} from "react-router-dom";
import ReactLoading from 'react-loading';

const Home = () => {
 const [dataProducts, setDataProducts] = useState ([]);
 const [isLoading, setIsLoading] = useState(false);
 const fetchGetAllProduct=async() => {
  await setIsLoading(true)
  await getAllProducts()
  .then((res) => {
    setDataProducts(res.data)
  })
      .catch((error)=> {
        console.log(error);
    });
    await setIsLoading(false)
 }
  useEffect(() => {
    fetchGetAllProduct();
         },[]);

  return (
  <div>
  <h1> Let's Choice your Scarlett !!</h1>
  {isLoading ?(
  <ReactLoading type="spokes" color="grey" className="m-auto mt-5"/>):
  (

  <div className="d-flex flex-wrap" >
     {dataProducts.map((products)=>
      <Link 
        to={`/detail-product/${products.id}`} 
          className="text-decoration-none">
        <CardComponent 
          title={products.name}
          price={products.price}
          image={products.image}
          />
      </Link>
         )}
   </div>

  )}
    
    </div>
  )
};

export default Home;