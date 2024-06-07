import axios, { all } from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../Sheet/sheet.css'
import { Link } from 'react-router-dom'
export const Sheet = () => {
    const {number} =  useParams()
    let [sheet , setSheet] = useState([])
    let [num , setnum] = useState([])
    let [basmala , setbasmala] = useState([])
    let [audio,setaudio]= useState([])
    let[names,setnames] = useState([])
    async function getQuran(){
        const data = await axios.get(`https://api.dikiotang.com/quran/ayah/surah/${number}`)
        const data2 = await axios.get(`https://api.dikiotang.com/quran/surah/${number}`)
        const data3 = await axios.get(`https://api.dikiotang.com/quran/surah/${number}`)
        setSheet(data.data.data)
        setaudio(data2.data.data.audio_url);     
        setnum(data.data.data[0])
        setbasmala(data.data.data[0])
        setnames(data3.data.data)
    }
    useEffect(function(){
            getQuran();
    },[])
    return (
        <>
        <div className='iqraa'>
        <div className='top'>
        <h3> الرقم  : {num.surah}</h3>
        <h3>{names.name_long}</h3>
        <h3>{names.revelation}</h3>
        </div>
        <div className='top'>
            <audio src={audio} controls></audio>
            <Link className='tf' to={`/quran/tafsir/${number}`}>التفسير</Link>
        </div>
            <h2 className='bas'>بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</h2>
        <div className='sheet' >
           {sheet.map(function(item , index){
               return(

                    <h3 key={index} className='h3'>  {item.arab}<p>{item.ayah}</p></h3>
                )
            })}
        </div>
                </div>
            </>
    )
}
