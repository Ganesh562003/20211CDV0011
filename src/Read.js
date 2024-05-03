import React,{useState,useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';

function Read(){
  const [data,setData]=useState([])
  const {productName}=useParams();
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
              Availability: {datas.availability}<br/><br/>
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                    <div class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    <Link to={"/"}>Back</Link></div>
                      </button>

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