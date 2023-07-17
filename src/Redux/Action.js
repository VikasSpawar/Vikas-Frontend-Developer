
import {  GET_ALL_DATA, GET_ALL_DATA_REQ } from "./ActionType"
import { API } from "./api"




export const getAllDataReq=()=>{
    return {
        type:GET_ALL_DATA_REQ
    }
}



export const setAllData=(payload)=>{
    return {
        type:GET_ALL_DATA,
        payload
    }
}






export const getAllData=(currentPage,params)=>async(dispatch)=>{
        dispatch(getAllDataReq())
        // console.log(params)
    try {
        const res = await API.get(`${`/launches?limit=${100}&sort=asc`}`,{
            params:{
               ...params
            }
        });

        dispatch(setAllData(res.data))
      } catch (error) {
      
        throw new Error('Error fetching Data');
      }
}









