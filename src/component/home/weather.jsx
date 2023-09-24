
import "./weather.css"
import img from "./bag3.jpg"
import Search from "./search";
import {  useState } from "react";
import { LocationOn, Opacity, Brightness5, Brightness6, Dehaze, Cloud, SettingsBrightness } from '@mui/icons-material'
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import clouds from "./clouds.gif"


const Weather =()=>{

   const[result,setdata]=useState([])
   const[btn, setbtn]=useState("search")
   const[imges, setimg]=useState(img)
   const[icon, seticon]=useState(clouds)



 const id="black";
    return <div className="container">
       
        <div className="box"> <div className="imge"><img src={imges} alt="img" height="650"/> </div>
        <div className="serchbox">{btn === "search"?<Search setdata={setdata} setbtn={setbtn} setimg={setimg} result={result} seticon={seticon}/>:<div class="loader"></div>}</div> 
        <div className="info">
       {btn === "search" && 
       <div id={id} className="info-box">
         <div className="icons">
          < img src={icon} height="100" width="100"/>
        </div>
        <div className="info-row"><SettingsBrightness id="icn"/> <h2>Temperature: {(result.main.temp- 273.15).toFixed(2)}<span>&#176;</span></h2><h2></h2></div>
        <div className="info-row"><Opacity id="icn"/><h2>Humidity: {result.main.humidity}</h2></div>
        <div className="info-row"><Brightness5 id="icn"/> <h2>Sun Rise: {new Date(result.sys.sunrise * 1000).toLocaleTimeString()}</h2></div>
        <div className="info-row"><Brightness6 id="icn"/> <h2>Sun Set: {new Date(result.sys.sunset * 1000).toLocaleTimeString()}</h2></div>
        <div className="info-row"><Dehaze id="icn" />  <h2>Sky: {result.weather[0].main}</h2></div>
        <div className="info-row"><Cloud id="icn"/> <h2>Clouds: {result.clouds.all}%</h2></div>
           
           
        </div>
          
            
    
     }
        

            </div>
        </div>
      
    </div>
}


export default Weather;