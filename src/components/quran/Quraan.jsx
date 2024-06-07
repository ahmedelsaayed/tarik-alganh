import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import '../quran/quraan.css'
export const Quraan = ({spinner}) => {
    let [quraan , setquraan] = useState([])
   async function getdata(){
    const data = await axios.get('https://api.alquran.cloud/v1/surah') 
    setquraan(data.data.data)
}
    useEffect(function(){
        getdata();
    },[])
    AOS.init();
    return (
        <div key={"quraan"}>
        <h1 className='qaddress'> القرأن الكريم   </h1>
        <div className='Quran'>
            {quraan.map(function(item , index){
                return(
                    <Link to={`/quran/${item.number}`} key={index}   className="quaran">
                        <h4>{item.number}</h4>
                        <h3 >{item.name}</h3>
                        <h3 >{item.englishName}</h3>
                    </Link>
                )
                
            })}
            </div>
        </div>
    )
}
