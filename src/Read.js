import React,{useState,useEffect} from "react";
import axios from "axios";
function Read(){
    const [data,setData]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            try{
              const response=await axios.get("http://localhost:3006/user");

              setData(response.data);
    
            }catch(error){
              console.log('error fetching data',error);
            }
          };
          fetchData();
        
    },[])
    return(
        <div>
      

      <div >
        <div >
        <h1 >Fetched data is</h1>
        <ul>
          {data.map((datas)=>(
            <div>


            <li  key={datas.productName}>{datas.price} </li>
            <li  key={datas.productName}>{datas.rating}</li>
            <li  key={datas.productName}>{datas.availability}</li>
            
            </div>
           
          ))}
         
        </ul>
        </div>
      </div>
      </div>

    )
}

export default Read;