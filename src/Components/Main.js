import React from "react"
import { Card } from "./Card"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
export const Main = () => {
    const [url,setUrl]=useState("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=d288ea036881fdb1ed7176f7d8d918b8&hash=2fddc6e126b74cfef44d54cbb5f75522");
    const [item,setItem]=useState();
    const [search,setSearch]=useState("");
    useEffect(()=>{
        const fetch=async()=>{
            const res=await axios.get(url)
            setItem(res.data.data.results);
        }
        fetch();
    },[url])

    const searchMarvel=()=>{
        setUrl(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=d288ea036881fdb1ed7176f7d8d918b8&hash=2fddc6e126b74cfef44d54cbb5f75522`)
      }

  return (
    <>
        <div className='header'>
            <div className='bg'>
                <img src='./Images/image_1.jpg' alt=''/>
            </div>
            <div className='search-bar'>
            <img src='./Images/Logo.png' alt='logo'/>
            <input type="search" placeholder="search here"
                className='search' onChange={e=>setSearch(e.target.value)}
                onKeyPress={searchMarvel} />
            </div> 
        </div>
        <div className='content'>
            {
                (!item)?<p>Not Found</p>:<Card data={item}/>
            }
        </div>
    </>
    
  )
}
