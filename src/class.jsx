
import React, { useState } from "react";
import { myArr } from "./data";

const  New =({setsub})=>{

    return <>
    <h1>name</h1>
    <select onChange={(e)=>{setsub(e.target.value)}}>
       {
        myArr.map((student)=>{
            return <><option value={student.subject} >{student.name}</option></>
        })
       }
  </select>

  </>
}



export default New;