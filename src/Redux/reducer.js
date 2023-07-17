import { GET_ALL_DATA, GET_ALL_DATA_REQ } from "./ActionType"


const InitialData={
    data:[],
    LoadingType:"",
    isError:""
}

const reducer=(store=InitialData,action)=>{

    switch(action.type){

        case GET_ALL_DATA_REQ:{
            return {
                ...store,
                LoadingType:GET_ALL_DATA_REQ
            }
        }
    
        case GET_ALL_DATA:{

            return{
                ...store,
                data:action.payload,
                LoadingType:"",
                isError:""
            }
        }
     
         
    
        default : 
        return store
    }

}

export default reducer
