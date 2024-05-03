import React,{useState,useEffect} from "react";
import axios from "axios";
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
      

      <div >
        <div >
        <h1 >Fetched data is</h1>
        <ul>
          
            <div>
              <table className="border-fixed border-amber-300 border border-slate-500 ..." >
                <thead>
                <tr><th className="border border-slate-600 ...">ProductNames</th>
                <th className="border border-slate-600 ...">ProductPrice</th>
                <th className="border border-slate-600 ...">Productrating</th>
                <th className="border border-slate-600 ...">Productavilability</th>
                </tr>
                </thead>
                <tbody>
                {data.map((datas)=>(
                <tr>
                <td className="border border-slate-700 ..." key={datas.productName}> {datas.productName}</td>
                  <td className="border border-slate-700 ..." key={datas.productName}>{datas.price}</td>
                  <td className="border border-slate-700 ..." key={datas.productName}> {datas.rating}</td>
                  <td className="border border-slate-700 ..." key={datas.productName}> {datas.availability}</td>
                </tr>) )}
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