import React,{useState,useEffect} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

function Display(){
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
        <div className="bg-gray-100 p-4"  >
      

      <div className="container mx-auto">
        <div >
        <p className="text-center decoration-solid underline-offset-4 text-lg my-10 rounded text-black-50">Fetched data is</p>
        <ul>
          
            <div className="bg-blue-300">
              <table className="min-w-full divide-y divide-gray-200" >
                <thead>
                <tr><th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Names</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avilability</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {data.map((datas)=>(
                <tr>
                <td className="px-6 py-4 whitespace-nowrap" key={datas.productName}> {datas.productName}</td>
                  <td className="px-6 py-4 whitespace-nowrap" key={datas.productName}>{datas.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap" key={datas.productName}> {datas.rating}</td>
                  <td className="px-6 py-4 whitespace-nowrap" key={datas.productName}> {datas.availability}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                  <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                    <div class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    <Link to={"/Read/${datas.productName}"}>Read</Link></div>
                      </button>
                  
                  </td></tr>) )}
                </tbody>
              </table>


           
          
            </div> 
           
         
         
        </ul>
        </div>
      </div>
      </div>

    )
}

export default Display;