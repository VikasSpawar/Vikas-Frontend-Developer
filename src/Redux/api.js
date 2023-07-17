import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.spacexdata.com/v3',
  defaults:{
    headers:{
      common:{
        Authorization:`Bearer ${JSON.parse(sessionStorage.getItem("token"))}`
      }
    }
  }
});

// Set the default headers for all requests
 const setAuthToken=(token,userData)=>{
    

    sessionStorage.setItem("token",JSON.stringify(token))
   sessionStorage.setItem("userData",JSON.stringify(userData))
    API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
} 

export  {API , setAuthToken};

