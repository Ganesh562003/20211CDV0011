import React,{useState,useEffect} from "react";
import axios from "axios";
function Read(){
    const [data,setData]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            try{
              const response=await axios.get("http://20.244.56.144/test/compaines/:companyname/categories/:categoryname/products?top=n&minPrice=p&maxPrice=q");

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


            <li  key={datas.id}>{datas.productName} </li>
            <li  key={datas.id}>{datas.price}</li>
            
            </div>
           
          ))}
         
        </ul>
        </div>
      </div>
      </div>

    )
}

export default Read;