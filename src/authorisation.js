import React,{useState,useEffect} from "react";
import axios from "axios";
function Authorisation(){
    const [data,setData]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            try{
              const request=await axios.post("http://20.244.56.144/test/auth");

              setData(request.data);
              console.log(data);
    
            }catch(error){
              console.log('error fetching data',error);
            }
          };
          fetchData();
        
    },[])
    return(
        <div>
            <h1>hello</h1>
        </div>
        

    )
}

export default Authorisation;