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
        <div>
      

      <div className="justify-item-center" >
        <div >
        <h1 className="justify-self-center bg-slate-900 text-slate-50">Fetched data is</h1>
        <ul>
          
            <div>
              <table className="table-auto w-1/2 border-collapse border-spacing-x-px border-amber-300 border  ..." >
                <thead>
                <tr><th className="border border-amber-600 bg-slate-900 text-slate-50 ...">Names</th>
                <th className="border border-amber-600 bg-slate-900 text-slate-50 ...">Price</th>
                <th className="border border-amber-600 bg-slate-900 text-slate-50 ...">Rating</th>
                <th className="border border-amber-600 bg-slate-900 text-slate-50 ...">Avilability</th>
                <th className="border border-amber-600 bg-slate-900 text-slate-50 ...">Action</th>
                </tr>
                </thead>
                <tbody>
                {data.map((datas)=>(
                <tr>
                <td className="place-content-center border border-amber-700 bg-slate-900 text-slate-50 ..." key={datas.productName}> {datas.productName}</td>
                  <td className="border border-amber-700 bg-slate-900 text-slate-50 ..." key={datas.productName}>{datas.price}</td>
                  <td className="border border-amber-700 bg-slate-900 text-slate-50 ..." key={datas.productName}> {datas.rating}</td>
                  <td className="border border-amber-700 bg-slate-900 text-slate-50 ..." key={datas.productName}> {datas.availability}</td>
                  <td className="border border-amber-700 bg-slate-900 text-slate-50 ...">
                  <Link to={'/read/${data.productName}'}>Read</Link>
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