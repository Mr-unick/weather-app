import axios from "axios"



export const fetchapi= async(city)=>{
  
try{
    console.log("called");
    let response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},india&appid=f56f24967aaf51182d1d4df628297c6d&unit=metric`);
    
    return  response.data;
}catch(error){
    console.log("Error with Fetching APi",error.message)
    return error.response
}
}