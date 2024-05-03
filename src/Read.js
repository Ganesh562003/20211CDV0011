import React,{useState,useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
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
      <div className="bg-blue-300">
      <div className="py-10 px-40 text-2xl font-medium"><h1>Laptops:</h1></div>
      <ul>
        
          <div className="container mx-auto sm p-4 ">
            
              {data.map((datas)=>(
              <ul>
              <li className="container w-1/2 p-4 mx-auto text-center border-transparent my-20 rounded-xl shadow-lg shadow-black-4000/500 bg-white" key={datas.productName}> 
              Product Name: {datas.productName}<br/>
              Price: {datas.price}<br/>
              Rating: {datas.rating}<br/>
              Discount: {datas.discount}<br/>
              Availability: {datas.availability}
              </li>
              </ul>) )}
              


         
        
          </div> 
         
       
       
      </ul>
      </div>
    </div>
    </div>

  )
}
export default Read;