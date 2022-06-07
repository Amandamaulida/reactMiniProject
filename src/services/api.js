import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL ="http://localhost:8000"

export const getAllProducts = () => {
   return axios.get(`${BASE_URL}/products`)
   
};

export const getProductById =(id) => {
   return axios.get(`${BASE_URL}/products/${id}`)
}

export const login = (name,password) => {
   const bodyJson = {
      name :name,
      password:password,
   }
   return axios.post(`${BASE_URL}/auth/login`,bodyJson)
}

export const register = (name,address, phone_number,password) => {
   const bodyJson = {
      name,
      address,
      phone_number,
      password
   };
   const token = Cookies.get('token') 

   const configHeaders = {
   'Authorization': "Bearer" + token,
   };

   return axios.post(`${BASE_URL}/auth/register`,bodyJson,configHeaders)
};

