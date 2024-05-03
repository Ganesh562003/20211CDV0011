import React,{useState,useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function Read(){
  const [data,setData]=useState([])
  const { productName }=useParams();
  useEffect(()=>{
      axios.get("http://localhost:3006/user"+productName)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
    },[])
    return(
      <div className="container mx-auto sm p-4 ">
              
                <ul>
                <li className="container px-60 py-10 border-transparent my-20 rounded-xl shadow-lg shadow-black-4000/500 bg-white" key={data.productName}> {data.productName}<br/>{data.price}<br/>{data.rating}<br/>{data.discount}<br/>{data.availability}</li>
                </ul>
                


           
          
            </div>
        
    )
}

export default Read;