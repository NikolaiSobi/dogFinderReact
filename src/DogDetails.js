import { Navigate, useParams } from "react-router-dom";
import { Dog } from "./Dog";

function dogExist(params, dogs) {
   let  isExist = false
    for(let dog of dogs){
        if(params.name == dog.name){
            isExist = true

            break
        }
    }
    return isExist
}

export const DogDetails = ({details}) => {
    const params = useParams()
    {if(!dogExist(params, details.dogs)) {
        return <Navigate to={'/dogs'} />  
       } else  {
         return <Dog name={params.name} details={details}/>
       }
     }

}