


import { useEffect, useState } from "react";
import { fetchapi } from "./api";
import "./search.css"
import summer from "./summer.jpg"
import img from "./bag3.jpg"
import clouds from "./clouds.gif"
import rain from "./rain.gif"
const Search =({setdata,setbtn,setimg,result,seticon})=>{

   const [city,setcity]=useState()
   


const getweather = (city)=>{
    setbtn("loader")
    setTimeout(async() => {
        let responce = await fetchapi(city)
        console.log("data2",responce);
        setbtn("search") 
     setdata(responce)
        if(result.weather[0].main === "Clouds"){
            setimg(img)
            seticon(clouds)
        }else{
            setimg(summer)
            seticon(rain)
        }
        setdata(responce);
        console.log(responce)
      }, "1000");
     
}
   
    return (
        <div className="box1">
            <form class="form">
    <label for="search">
        <input class="input" type="text" required="" placeholder="Search City" id="search" onChange={(e)=>{ setcity(e.target.value)}}/>
        <div class="fancy-bg"></div>
        <div class="search">
            <svg viewBox="0 0 24 24" aria-hidden="true" class="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr" onClick={()=>{ getweather(city)}}>
                <g>
                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                </g>
            </svg>
        </div>
    </label>
</form>
        </div>
    )
}


export default Search;